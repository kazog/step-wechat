/**
 * 统一网络配置
 */
// https://api.pexels.com/
const url = 'https://api.pexels.com/';

const headers = {
  "Authorization": "563492ad6f917000010000010928ef99c568416e96bc18584add3368"
}
/**
 * 請求
 * @param {
      url: 'url',
      data: {},
      method: '',
      header: {}
   } options 
 */
export function request(options) {
  wx.showLoading({
    title: '加载中...',
  })
  options.url = url + options.url;
  options.header = headers;

  console.log('《====== 请求参数 ======》》');
  console.log(options);
  return new Promise((resolve) => {
    wx.request({
      ...options,
      success: (res) => {
        console.log('《====== 响应数据 ======》》');
        console.log(res);
        let {
          statusCode,
          data
        } = res;
        if (statusCode === 200) {
          resolve({
            success: true,
            data,
          })
        } else {
          resolve(parseError(statusCode))
        }
      },
      fail: (err) => {
        console.log('《====== 请求错误 ======》》');
        console.log(err);
        resolve(parseError(0))
      },
      complete: () => {
        // 取消加载框之类的操作
        wx.hideLoading()
      }
    })
  });
}

export function upload(file) {
  return new Promise((resolve) => {
    wx.cloud.uploadFile({
      // 指定上传到的云路径
      cloudPath: 'user/bg/'+Date.now()+'.jpg',
      // 指定要上传的文件的小程序临时文件路径
      filePath: file,
      // 成功回调
      success: (res) => {
        console.log('上传成功', res)
        if(res.errMsg.indexOf(':ok') > -1) {
          resolve({
            status: true, 
            data: res.fileID
          })
        }else {
          resolve({
            status: false, 
            data: null
          })
        }
      },
      fail: (err) => {
        console.log(err)
        resolve({
          status: false, 
          data: null
        })
      }
    })
  });
}

export function download(url) {
  wx.showLoading({
    title: '下载中...',
  })
  return new Promise((resolve) => {
    wx.downloadFile({
      url,
      success: (res) => {
        console.log('《====== 下载成功 ======》》');
        console.log(res)
        if(res.statusCode === 200){
          resolve({success: true, data: res.tempFilePath});
        }else{
          resolve({
            success: false,
            message: res.errMsg,
          })
        }
      },
      fail: (err) => {
        console.log('《====== 下载错误 ======》》');
        console.log(err);
        resolve({
          success: false,
          message: '下载失败'
        })
      },
      complete: () => {
        wx.hideLoading()
      }
    })
  });
}

function parseError(code) {
  let message = 'OK';
  switch (code) {
    case 401:
      message = '抱歉，应用获取失败，开发人员正在加班解决！'
      break;
    case 404:
      message = '抱歉，地址跑路了！'
      break;
    case 500:
      message = '抱歉，服务器失踪了！'
      break;
    case 301:
      message = '抱歉，应用授权失败，请等待！'
      break;
    default:
      message = '抱歉，未知错误！'
      break;
  }
  return {
    success: false,
    message
  };
}