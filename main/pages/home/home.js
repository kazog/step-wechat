// pages/home/home.js
import {queryPhotos} from '../../modules/apis/index';
const tagList2 = ['nature', 'New Year', 'desktop wallpaper', 'art', 'style', ''];
import {setInfo} from '../../modules/store/index';

Page({
  data: {
    tabList: ['推荐', '关注', '周榜', '月榜'],
    tagList: ['自然', '新年', '壁纸', '艺术', '风格', '更多'],
    tabIndex: 0,
    query: '4k Wallpaper',
    pageNum: 1,
    hasMore: true,
    pageList: []
  },

  onLoad: function () {
    this.queryPhoto();
  },

  onShow: function () {
  },

  queryPhoto: async function() {
    let that = this;
    let page = that.data.pageNum;
    let {success, data} = await queryPhotos({
      page,
      query: that.data.query,
      per_page: 50
    });
    if(success) {
      let list = that.data.pageList;
      if(page < 2) {
        list = data.photos;
      }else {
        list.push(...data.photos);
      }
      that.setData({
        pageList: list
      })
      that.data.hasMore = 30 * page < data.total_results;
      that.data.pageNum += 1;
    }
  },

  onPullDownRefresh: function () {
    let that = this;
    that.data.pageNum = 1;
    that.data.hasMore = true;
    that.queryPhoto()
  },

  onReachBottom: function () {
    let that = this;
    if(that.data.hasMore) {
      that.queryPhoto()
    }
  },

  onChangeTab: function (e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      tabIndex: index
    })
  },
  onPressHuati: function (e) {
    let that = this;
    let index = e.currentTarget.dataset.index;
    let url = '/pages/home/column/column?tag=' + index;
    if(index === that.data.tagList.length - 1) {
      url = '/pages/home/topic/topic'
    }else {
      that.data.query = tagList2[index];
      that.onPullDownRefresh();
      return;
    }
    wx.navigateTo({
      url,
    })
  },
  onPressItem: function (e) {
    console.log(e)
    let tag = e.currentTarget.dataset.tag;
    console.log(tag)
    // large2x large portrait original landscape
    // wx.previewImage({
    //   urls: [tag.large],
    // })
    setInfo(tag);
    wx.navigateTo({
      url: '/pages/home/down/down?tag=' + tag.medium,
    })
  }

})