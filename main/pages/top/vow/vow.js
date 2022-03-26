// 

import {pushVow} from '../../../modules/apis/cloudApi';
import {uploads} from '../../../modules/net/cloud';
const app = getApp()

Page({

  data: {
    title: '',
    desc: '',
    dateStr: '',
    count: 1,
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
    let that = this;
    let data = this.data;
    if(data.title.length < 1) {
      app.onToast('请输入标题')
      return
    }
    if(data.desc.length < 1) {
      app.onToast('请输入愿望简述')
      return
    }

    if(data.imgList.length > 0) {
      uploads(data.imgList, 'vow').then((res) => {
        console.log(res)
        let imgs = res.map((e) => {
          let img = '';
          if(e.status) {
            img = e.data
          }
          return img;
        })
        that.onPushVow(imgs[0])
      })
    }else {
      that.onPushVow('')
    }
    
    
  },
  onPushVow: function(img) {
    let data = this.data;
    pushVow({
      img,
      date: data.dateStr,
      title: data.title,
      invite: '',
      memo: '',
      tid: '',
      type: 1,
      desc: data.desc,
    }).then((res) => {
      if(res.status && res.data.id) {
        app.onToast('许愿成功', 1)
      }else {
        app.onToast('许愿失败，请重新提交')
      }
    })
  }

})