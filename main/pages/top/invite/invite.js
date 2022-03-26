// 

import {
  changeInvite
} from '../../../modules/apis/cloudApi';
import {
  uploads
} from '../../../modules/net/cloud';
import {
  authorize,
  Scope
} from '../../../modules/auth/index';
import {
  isPhone
} from '../../../utils/util';

const app = getApp()

Page({

  data: {
    title: '',
    desc: '',
    dateStr: '',
    phone: '',
    name: '',
    address: '',
    addressName: '',
    lat: 0,
    lng: 0,
    count: 1,
    imgList: []
  },

  onLoad: function (options) {

  },

  onReady: function () {

  },

  onUnload: function () {

  },
  bindInputTitle: function (e) {
    this.data.title = e.detail.value
  },
  bindInputPhone: function (e) {
    this.data.phone = e.detail.value
  },
  bindInputName: function (e) {
    this.data.name = e.detail.value
  },
  bindInputDesc: function (e) {
    this.data.desc = e.detail.value
  },

  onSelectDate: function (e) {
    console.log(e)
    this.setData({
      dateStr: e.detail.value
    })
  },
  onSelectAddress: function () {
    let that = this;
    authorize(Scope.location).then((res) => {
      if (res.status) {
        wx.chooseLocation({
          success: (result) => {
            console.log(result)
            if (result.errMsg.indexOf(':ok') > -1) {
              that.setData({
                addressName: result.name,
                address: result.address,
                lat: result.latitude,
                lng: result.longitude
              })
            } else {
              app.onToast('获取位置失败，请重试')
            }
          },
        })
      }
    })
  },
  onChangeImg: function (e) {
    let list = e.detail.value.filter((e) => e != null)
    this.data.imgList = list;
    console.log(list)
  },
  onCancel: function () {
    wx.navigateBack()
  },
  onCommit: function () {
    let that = this;
    let data = this.data;
    if (data.title.length < 1) {
      app.onToast('请输入标题')
      return
    }
    if (data.dateStr.length < 1) {
      app.onToast('请选择日期')
      return
    }
    if (data.address.length < 1) {
      app.onToast('请选择地址')
      return
    }

    if (!isPhone(data.phone)) {
      app.onToast('请输入正确的手机号')
      return
    }
    if (data.name.length < 1) {
      app.onToast('请输入邀请人姓名')
      return
    }
    if (data.desc.length < 1) {
      app.onToast('请输入邀请简述')
      return
    }
    if (data.imgList.length < 1) {
      // app.onToast('上传邀请照片')
      // return
      that.onPush([])
    } else {
      uploads(data.imgList, 'invite').then((res) => {
        console.log(res)
        let imgs = res.map((e) => {
          let img = '';
          if (e.status) {
            img = e.data
          }
          return img;
        })
        that.onPush(imgs)
      })
    }
  },
  onPush: function (imgs) {
    let data = this.data;
    let type = imgs.length > 0 ? 1 : 0;
    changeInvite({
      type,
      date: data.dateStr,
      title: data.title,
      pic: (type > 0 ? imgs[0] : ''),
      memo: '',
      content: data.desc,
      address: data.address,
      addressName: data.addressName,
      lat: data.lat,
      lng: data.lng,
      phone: data.phone,
      user: data.name,
    }).then((res) => {
      if (res.status && res.data.id) {
        app.onToast('邀请函发送成功', 1)
        wx.setStorageSync('invite-axis', 1)
      } else {
        app.onToast('邀请函发送失败，请重新发送')
      }
    })
  }
})