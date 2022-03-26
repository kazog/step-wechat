// pages/my/mhome/mhome.js

const maxH = 260;
import {getUser} from '../../../modules/store/index';
Page({

  data: {
    user: {},
    alpha: 0,
    title: '',
    tabIndex: 0,
    tabList: ['作品', '视频'],
  },

  onLoad: function () {
    let that = this;
    const user = getUser();
    that.setData({
      user,
    })
  },

  onReady: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onChangeTab: function(e) {
    // console.log(e);
    let index = e.currentTarget.dataset.index;
    this.setData({
      tabIndex: index
    })
  },

  onPageScroll: function (e) {
    // console.log(e);
    let that = this;
    let alpha = e.scrollTop/maxH;
    if(that.data.alpha > 1 && alpha > 1) {
      return;
    }
    let title = that.data.user.nickName;
    that.setData({
      alpha,
      title: alpha > 0.7 ? title : ''
    })
  }
})