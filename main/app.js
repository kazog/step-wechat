/**
 * 
 */


import {onLogin} from './modules/apis/cloudApi';
import {isLogin,setLogin,setBg,getBg} from './modules/store/index';

App({

  const: {
    wxId: '',
    bgImg: ''
  },
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env：请求到哪个云环境的资源, 如不填则使用默认环境
        env: 'gyj-6g0zshxaeba3ac48',
        traceUser: true,
      })
    }
  },

  onShow: function (options) {
    console.log('=========> onLaunch', options)
    let that = this;
    that.update()
    let login = isLogin();
    that.const.bgImg = getBg();
    if (!login) {
      onLogin().then((res) => {
        if (res.status) {
          let result = res.data;
          that.const.bgImg = result.bgimg
          setLogin(1)
          setBg(result.bgimg)
        }
      })
    }
  },

  onHide: function () {

  },

  onError: function (msg) {

  },
  onToast: function(msg, delta=0) {
    wx.showToast({
      title: msg,
      icon: 'none'
    })
    if(delta > 0) {
      wx.navigateBack({
        delta,
      })
    }
  },
  update: function () {
    let um = wx.getUpdateManager();
    um.onCheckForUpdate((res) => {
      if (res.hasUpdate) {
        um.onUpdateReady((res2) => {
          if (res2.errMsg.indexOf(':ok') > -1) {
            wx.showModal({
              title: '更新提示',
              content: '发现有新版本，是否立即体验？',
              success: function (res3) {
                if (res3.confirm) {
                  // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                  um.applyUpdate()
                }
              }
            })
          }
        })
      } else {
        console.log('无新版本')
      }
    });
  }
})