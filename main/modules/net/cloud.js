/**
 * 
 */
/**
 * options = {
 *  name: '',
 *  data: {}
 * }
 */

export function query(options = {}) {
  wx.showLoading({
    title: '处理中...',
  })
  return new Promise((resolve) => {
    wx.cloud.callFunction({
      ...options,
      complete: (res) => {
        console.log('---------> cloud ', options)
        console.log(res.result)
        wx.hideLoading()
        if (res.errMsg.indexOf(':ok') > -1) {
          resolve({
            status: true,
            data: {
              ...res.result
            }
          })
        } else {
          resolve({
            status: false,
            message: '未查询到数据'
          })
        }
      }
    })
  });
}

export function uploads(files, path) {
  return Promise.all(files.map((e) => {
    return upload(e, path)
  }));
}

export function upload(file, path) {
  wx.showLoading({
    title: '上传中...',
  })
  return new Promise((resolve) => {
    wx.cloud.uploadFile({
      // 指定上传到的云路径
      cloudPath: `user/${path}/${Date.now()}.jpg`,
      // 指定要上传的文件的小程序临时文件路径
      filePath: file,
      // 成功回调
      success: (res) => {
        console.log('上传成功', res)
        wx.hideLoading()
        if (res.errMsg.indexOf(':ok') > -1) {
          resolve({
            status: true,
            data: res.fileID
          })
        } else {
          resolve({
            status: false,
            data: null
          })
        }
      },
      fail: (err) => {
        console.log(err)
        wx.hideLoading()
        resolve({
          status: false,
          data: null
        })
      }
    })
  });
}

// 解析手机号
async function parsePhone(cloudID) {
  let that = this
  // 云函数获取手机号
  let {
    errMsg,
    result
  } = await wx.cloud.callFunction({
    name: 'getInfo',
    data: {
      weRunData: wx.cloud.CloudID(e), // CloudID
      obj: {
        shareInfo: wx.cloud.CloudID(e), // CloudID
      }
    }
  });
  console.log(result)
  // 判断是否获取到数据
  if (errMsg.indexOf(':ok') > -1) {
    let runData = result.event.weRunData.data;
    if (runData) {
      console.log(runData)
    }
  } else {
    // 获取失败
    that.toast('抱歉，微信授权失败')
  }
}