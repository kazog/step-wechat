// 
import {getTimes, getInfo, changeInvite, getInvite, setBgImg} from '../../modules/apis/cloudApi';
import {upload} from '../../modules/net/index';
import {setInfo, getTimeData, setTimes, clearTimes, setBg} from '../../modules/store/index';
const app = getApp();

Page({

  data: {
    bgImg: '/assets/icon/bg02.jpg',
    showInvite: false,
    inviteId: '',
    wxId: '',
    hasInfo: false,
    timeList: []
  },

  onLoad: function (options) {
    let that = this;
    that.data.bgImg = app.const.bgImg;
    that.getInfo();
    // that.getHots();
  },

  onShow: function() {
    let that = this;
    let has = wx.getStorageSync('time-axis');
    if(has == 1 && that.data.hasInfo) {
      clearTimes();
      wx.removeStorageSync('time-axis');
      that.getHots()
    }
    let invite = wx.getStorageSync('invite-axis');
    if(invite == 1) {
      wx.removeStorageSync('invite-axis');
      that.getInvites()
    }
  },
  getHots: function () {
    let that = this;
    let wxId = that.data.wxId;
    let times = getTimeData();
    if(times && times.length > 0) {
      that.setData({
        timeList: times
      })
    }else {
      getTimes({wxId}).then((res) => {
        if(res.status && res.data && res.data.list.length > 0) {
          that.setData({
            timeList: res.data.list
          })
          setTimes(res.data.list);
        }else {
          that.setData({
            timeList: [
              {dateStr: '2021-03-30', title: '应用简介', desc:'这是一款记录即分享瞬间的应用', imgs: ['/assets/icon/bg02.jpg']},
              {dateStr: '2021-04-02', title: '使用简介', desc:'点击下面的时间线，或发邀请，即可推送一条属于你的时间线', imgs: ['/assets/icon/bg02.jpg']},
            ]
          })
        }
      });
    }
  },

  getInvites: function() {
    let that = this
    let wxId = that.data.wxId;
    getInvite({wxId}).then((res) => {
      if(res.status && res.data && res.data.list.length > 0) {
        let info = res.data.list[0]
        // that.data.invite = info
        that.setData({
          invite: info,
          showInvite: true
        })
      }
    })
  },

  getInfo: function() {
    let that = this
    // 做优化。如果有更新则请求其他数据没有则从本地读取
    getInfo().then((res) => {
      if(res.status && res.data && res.data.info.length > 0) {
        let info = res.data.info[0]
        // 设置联系人wxid
        app.const.wxId = info.contactUid||''
        that.data.wxId = info.contactUid||''
        
        setInfo(info);
        if(info.update) {
          clearTimes();
          that.data.hasInfo = true
          that.getHots();
        }
        that.getInvites();
        if(that.data.bgImg != info.bgimg) {
          that.setData({
            bgImg: info.bgimg
          })
          setBg(info.bgimg)
        }
      }
    })
  },

  onUnload: function () {

  },
  
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },

  onReachBottom: function () {
    console.log('=======>')
  },
  onShareAppMessage: function () {

  },

  onPush: function() {
    wx.navigateTo({
      url: '/pages/top/push/push',
    })
  },

  onInvite: function() {
    wx.navigateTo({
      url: '/pages/top/invite/invite',
    })
  },

  onVows: function() {
    wx.navigateTo({
      url: '/pages/top/vow/vow',
    })
  },

  onInviteChange: function(e) {
    let that = this;
    that.setData({
      showInvite: false
    })
    if(e.detail.action == 'close') {
      return
    }
    changeInvite({
      id: that.data.invite._id,
      status: (e.detail.status ? 1:2)
    })
  },
  
  onPress: function(e) {
    let that = this;
    let item = e.detail;
    // console.log(e)
    wx.setStorageSync('times-tag', {
      timeList: that.data.timeList,
      item
    })
    wx.navigateTo({
      url: '/pages/top/times/times',
    })
  },
  onChangeBg: function() {
    let that = this;
    wx.showModal({
      title: '操作提示',
      content: '是否要更换背景图？注意背景图不得大于2M',
      success: (res) => {
        if(res.confirm) {
          that.onChooseImg()
        }
      }
    })
  },
  onChooseImg: function() {
    let that = this;
    wx.chooseImage({
      count: 1,
      success: (res) => {
        // console.log(res)
        if(res.errMsg.indexOf(':ok') > -1) {
          let files = res.tempFiles;
          let size = files[0].size

          if(size < 2097152) {
            that.setData({
              bgImg: files[0].path
            })
            upload(files[0].path).then((res) => {
              if(res.status) {
                setBgImg({
                  img: res.data
                })
              }
            })
          }else {
            wx.showToast({
              title: '图片尺寸应小于2M',
              icon: 'none'
            })
          }
        }
      }
    })
  }
})
