// pages/my/my.js
import {getUser,isLogin} from '../../modules/store/index';
Page({
  data: {
    user: {
      avatarUrl: '/assets/icon/user_ic.png',
      nickName: '请登录'
    },
    isLogin: false,
    tablist: [
    //   {
    //   value: '观看记录',
    //   icon: '/assets/icon/lishi.png',
    //   path: '/pages/my/history/history'
    // },
    {
      value: '意见反馈',
      icon: '/assets/icon/fankui.png',
      path: '/pages/my/feedback/feedback'
    },{
      value: '分享好友',
      icon: '/assets/icon/fenxiang.png',
      path: '/pages/my/share/share'
    },{
      value: '打赏',
      icon: '/assets/icon/send_aid.png',
      path: '/pages/my/aid/aid'
    },{
      value: '关于',
      icon: '/assets/icon/about.png',
      path: '/pages/my/about/about'
    }]
  },

  onLoad: function (options) {

  },

  onReady: function () {

  },

  onShow: function () {
    let that = this;
    if(isLogin()) {
      const user = getUser();
      that.setData({
        user
      })
    }
  },

  onPullDownRefresh: function () {

  },

  onPressItem: function(e) {
    let that = this;
    let index = e.currentTarget.dataset.index;
    if(index === 0) {
      if(that.showLogin()) {
        return;
      }
    }
    
    wx.navigateTo({
      url: that.data.tablist[index].path
    })
  },

  onTabPress: function () {
    if(this.showLogin()) {
      return;
    }
    wx.navigateTo({
      url: '/pages/my/info/info',
    })
  },

  onInfoPress: function () {
    let url = '/pages/my/info/info';
    if(!isLogin()) {
      url = '/pages/my/login/login';
    }
    wx.navigateTo({
      url
    })
  },

  showLogin: function() {
    if(!isLogin()) {
      wx.showModal({
        title: '请先登录',
        content: '您还未登录请先登录',
        success: (e) => {
          if(e.confirm) {
            wx.navigateTo({
              url: '/pages/my/login/login',
            })
          }
        }
      })
      return true;
    }
    return false;
  }
})