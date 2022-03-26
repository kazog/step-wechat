/**
 * Create By: Meng
 * Date: 2022-01
 * 网络请求封装
 */
import { requestHeader, requestHost, ENV_CONST } from './config';

function _toast(show, title = '', code, icon = 'none') {
    if (show && code != 0 && title) {
        wx.showToast({
            title,
            icon
        })
    }
}

function _loading(loading, title = '加载中...') {
    if (loading) {
        wx.showLoading({
            title,
        })
    } else {
        wx.hideLoading()
    }
}

/**
 * url:
 * method:
 * data: header:
 * env: host: toast: loading:
 */
export function request({ env = ENV_CONST.env, host = 'base', url = '', method = 'GET', data = {}, header = {}, toast = true, loading = true, loadStr = '加载中...' } = {}) {

    _loading(loading, loadStr);

    url = requestHost(env, host) + url;
    header = requestHeader(header);
    const options = { url, method, data, header };

    _pointLog('=========> Request <==========', options);
    return new Promise((resolve) => {
        const result = { message: '', code: -1, data: null, header: null };
        wx.request({
            ...options,
            success: (res) => {
                _pointLog('=========> Response <==========', res.data);
                if (res.statusCode == 200) {
                    resolve(_parseData(result, res));
                } else {
                    resolve(_parseError(result, res));
                }
            },
            fail: (err) => {
                _pointLog('=========> Error <==========', err);
                resolve(_parseError(result, err));
            },
            complete: () => {
                _loading(false);
                _toast(toast, result.message, result.code);
            }
        })
    });
}

export function download(url) {

    _loading(true, '下载中...');

    return new Promise((resolve) => {
        wx.downloadFile({
            url,
            success: (res) => {
                _pointLog('《====== 下载成功 ======》》', res);
                if (res.statusCode === 200) {
                    resolve({ code: 0, data: res.tempFilePath });
                } else {
                    resolve({
                        code: -1,
                        message: res.errMsg,
                    })
                }
            },
            fail: (err) => {
                _pointLog('《====== 下载错误 ======》》', err);
                resolve({
                    code: -1,
                    message: '下载失败'
                })
            },
            complete: () => {
                _loading(false);
            }
        })
    });
}

export function uploads() {

}


export function upload(file) {
    return new Promise((resolve) => {
        wx.uploadFile({
            url: 'https://',
            filePath: file,
            name: 'file',
            formData: {
                'user': 'test'
            },
            success: (res) => {
                if (res.errMsg.indexOf(':ok') > -1) {
                    resolve({
                        code: 0,
                        data: res.fileID
                    })
                } else {
                    resolve({
                        code: -1,
                        data: null
                    })
                }
            },
            fail: (err) => {
                console.log(err)
                resolve({
                    code: -1,
                    data: null
                })
            }
        })
    });
}


function _parseData(result, res) {
    result.data = res.data;
    result.header = res.header;
    result.code = 0;
}

function _parseError(result, data) {
    if (data.statusCode) {
        result.code = data.statusCode;
        result.message = data.errMsg;
    } else if (data.errMsg) {
        result.code = -10101;
        result.message = data.errMsg;
    }
}

function _pointLog(tag, msg) {
    if (ENV_CONST.env == 'prod') {
        console.log(tag);
        console.log(msg);
    }
}
