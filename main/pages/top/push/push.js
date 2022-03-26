// 

import {pushTimes} from '../../../modules/apis/cloudApi';
import {uploads} from '../../../modules/net/cloud';

const app = getApp()
Page({

  data: {
    title: '',
    desc: '',
    dateStr: '',
    imgList: []
  },

  onLoad: function (options) {

  },

  onReady: function () {

  },

  onUnload: function () {

  },
  bindInputTitle: function(e) {
    this.data.title = e.detail.value
  },
  bindInputDesc: function(e) {
    this.data.desc = e.detail.value
  },
  onSelectDate: function(e) {
    console.log(e)
    this.setData({
      dateStr: e.detail.value
    })
  },
  onChangeImg: function(e) {
    let list = e.detail.value.filter((e) => e != null)
    this.data.imgList = list;
    console.log(list)
  },
  onCancel: function() {
    wx.navigateBack()
  },
  onCommit: function() {
    let data = this.data;
    if(data.title.length < 1) {
      app.onToast('请输入标题')
      return
    }
    if(data.desc.length < 1) {
      app.onToast('请输入心情简记')
      return
    }
    if(data.dateStr.length < 1) {
      app.onToast('请选择日期')
      return
    }
    if(data.imgList.length < 1) {
      app.onToast('请上传图片')
      return
    }
    uploads(data.imgList, 'times').then((res) => {
      console.log(res)
      let imgs = res.map((e) => {
        let img = '';
        if(e.status) {
          img = e.data
        }
        return img;
      })
      pushTimes({
        imgs,
        date: data.dateStr,
        title: data.title,
        subtitle: '',
        invite: '',
        memo: '',
        tid: '',
        type: 1,
        desc: data.desc,
      }).then((res) => {
        if(res.status && res.data.id) {
          app.onToast('添加记录成功', 1)
          wx.setStorageSync('time-axis', 1)
        }else {
          app.onToast('添加失败，请重新添加')
        }
      })
    })
  }
})