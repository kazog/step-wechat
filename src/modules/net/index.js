/**
 * Author: Meng
 * Date: 2022-02
 * 网络请求封装
 */
import { requestHeader, requestHost, requestParams, ENV_CONST } from "./config";

let loading_status = 0; // 0可隐藏，1不可隐藏
// Toast提示
function _toast(show, code, title = "", icon = "none", url) {
  if (code != 0 && show && title) {
    try {
      const timer = setTimeout(() => {
        clearTimeout(timer);
        wx.showToast({
          title,
          icon,
        });
      }, 300);
    } catch (error) {
      console.log(error);
    }
  }
}

// 加载框
function _loading(loading, title = "加载中...") {
  if (loading_status < 0) {
    loading_status = 0;
  }
  if (loading) {
    loading_status += 1;
    // if(loading_status < 2)
    wx.showLoading({
      title,
      mask: true,
    });
  } else {
    loading_status -= 1;
    if (loading_status < 1) {
      wx.hideLoading();
    }
  }
}

/**  网络请求
 * @param {
 *      env: 环境
 *      host: 地址
 *      url: 接口
 *      method: GET/POST
 *      data: 参数
 *      。。。
 * }
 */
export function request({
  env = ENV_CONST.env,
  host = "base",
  url = "",
  method = "GET",
  data = {},
  header = {},
  toast = true,
  loading = true,
  loadStr = "加载中...",
} = {}) {
  loading && _loading(loading, loadStr);
  url = requestHost(env, host) + url;
  header = requestHeader(header);
  data = requestParams(data, host);
  const options = { url, method, data, header };

  _pointLog("=========> Request: ", options);

  return new Promise((resolve) => {
    const result = { message: "", code: -1, data: null, header: null };
    wx.request({
      ...options,
      success: (res) => {
        _pointLog("=========> Response: " + url, res);
        if (res.statusCode == 200) {
          resolve(_parseData(res, result));
        } else {
          resolve(_parseError(res, result));
        }
      },
      fail: (err) => {
        _pointLog("=========> Error: " + url, err);
        resolve(_parseError(err, result));
      },
      complete: () => {
        loading && _loading(false);
        _toast(toast, result.code, result.message);
      },
    });
  });
}

// 下载文件
export function download(url) {
  _loading(true, "下载中...");

  return new Promise((resolve) => {
    wx.downloadFile({
      url,
      success: (res) => {
        _pointLog("《====== 下载成功 ======》》", res);
        if (res.statusCode === 200) {
          resolve({ code: 0, data: res.tempFilePath });
        } else {
          resolve({
            code: -1,
            message: res.errMsg,
          });
        }
      },
      fail: (err) => {
        _pointLog("《====== 下载错误 ======》》", err);
        resolve({
          code: -1,
          message: "下载失败",
        });
      },
      complete: () => {
        _loading(false);
      },
    });
  });
}

export function uploads() {}

// 上传文件
export function upload(file) {
  return new Promise((resolve) => {
    wx.uploadFile({
      url: "https://",
      filePath: file,
      name: "file",
      formData: {
        user: "test",
      },
      success: (res) => {
        if (res.errMsg.indexOf(":ok") > -1) {
          resolve({
            code: 0,
            data: res.fileID,
          });
        } else {
          resolve({
            code: -1,
            data: null,
          });
        }
      },
      fail: (err) => {
        console.log(err);
        resolve({
          code: -1,
          data: null,
        });
      },
    });
  });
}

// 解析数据
function _parseData(response, result) {
  const res = response.data.response ? response.data.response : response.data;
  if (res && res.code == 0) {
    result.code = 0;
    result.header = response.header;
    result.data = res.data || res.result || res;
    result.message = res.message || res.msg || "ok";
  } else {
    result.code = res.code;
    result.message = res.message || "服务升级中请稍候！";
    if (res.code == -3 || res.code == -4 || res.code == -1) {
      wx.clearStorage();
    }
  }

  return result;
}

// 解析错误
function _parseError(data = {}, result) {
  if (data.statusCode) {
    result.code = data.statusCode;
    result.message =
      data.errMsg == "request:ok"
        ? "抱歉，请求失败，请稍后再试！"
        : data.errMsg;
  } else if (data.errMsg) {
    result.code = -10101;
    result.message = "抱歉，网络异常，请稍后再试！-3";
    // result.message = data.errMsg || '抱歉，系统升级中！';
  }

  return result;
}

// 打印日志
function _pointLog(tag, msg) {
  if (ENV_CONST.env == "prod") {
    return;
  }
  console.log(tag);
  console.log(msg);
}
