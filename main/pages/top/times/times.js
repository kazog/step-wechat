// 

const timeKey = 'times-tag';
Page({
  data: {
    indicator: true,
    vertical: true,
    hasMore: false,
    cIndex: 0,
    pIndex: 0,
    imgs: [],
    timeList: [],
  },
  onLoad: function (options) {
    let that = this;
    let times = wx.getStorageSync(timeKey)||{}
    let item = times.item || {}
    that.setData({
      timeList: times.timeList,
      pIndex: item.index || 0,
      imgs: item.imgs,
      hasMore: that.data.imgs.length > 0
    })
    // console.log(that.data)
  },
  onUnload: function() {
    wx.removeStorageSync(timeKey)
  },
  onLook: function (e) {
    const index = e.currentTarget.dataset.index;
    let urls = this.data.imgs
    wx.previewImage({
      current: index,
      urls,
    })
  },
  onChange: function(e) {
    let index = e.detail.current+1
    let that = this;
    let size = that.data.imgs.length;
    that.setData({
      cIndex: (index - 1),
      hasMore: size > index
    })
  },
  onNextPage: function() {
    let that = this;
    let index = that.data.cIndex;
    that.setData({
      cIndex: (index + 1),
    })
  },
  onPullDownRefresh: function () {
    console.log('======>onPullDownRefresh')
    wx.stopPullDownRefresh()
  },
  onReachBottom: function () {
    let that = this;
    
    let timeList = that.data.timeList;
    let pindex = that.data.pIndex
    if(pindex < timeList.length && !that.data.hasMore) {
      let imgs = timeList[pindex].imgs;
      that.setData({
        imgs,
        cIndex: 0,
        pIndex: (pindex + 1),
        hasMore: imgs.length > 0
      })
    }
  },
  onPageScroll: function(e) {
    console.log(e)
  }
})