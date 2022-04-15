/**
 * User: Meng
 * Date: 2022-04
 * 首页
 */
import { queryBooks, queryHotBooks } from "../../modules/api/index";

Page({
  data: {
    indicator: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    tabIndex: 0,
    pageNum: 1,
    hasMore: true,
    tabList: ["推荐", "热销", "周榜", "月榜", "年度榜"],
    tagList: [
      { title: "推荐", color: "#9900ff" },
      { title: "Up主", color: "#0099FF" },
      { title: "点赞", color: "#FF0099" },
      { title: "投币", color: "#FF9900" },
      { title: "关注", color: "#00FF99" },
    ],
    banners: [
      "https://cn.bing.com/th?id=OHR.LesserAntilles_ZH-CN3012679657_1920x1200.jpg",
      "https://cn.bing.com/th?id=OHR.GrahamAdelie_ZH-CN2945763969_1920x1200.jpg",
      "https://cn.bing.com/th?id=OHR.HuggingDay_ZH-CN2984681593_1920x1200.jpg",
    ],
    pageList: [
      {
        name: "笑傲江湖",
        url:
          "https://cn.bing.com/th?id=OHR.LesserAntilles_ZH-CN3012679657_1920x1200.jpg",
      },
      {
        name: "鹿鼎记",
        url:
          "https://cn.bing.com/th?id=OHR.GrahamAdelie_ZH-CN2945763969_1920x1200.jpg",
      },
      {
        name: "天龙八部",
        url:
          "https://cn.bing.com/th?id=OHR.HuggingDay_ZH-CN2984681593_1920x1200.jpg",
      },
    ],
  },

  onLoad: function () {
    this.getHotBooks();
  },

  onShow: function () {},

  getHotBooks: async function () {
    let that = this;
    let pageNum = that.data.pageNum;
    let { success, data } = await queryHotBooks({
      pageNum,
      pageSize: 10,
    });
  },

  onPullDownRefresh: function () {
    let that = this;
    that.data.pageNum = 1;
    that.data.hasMore = true;
    that.getHotBooks();
  },

  onReachBottom: function () {
    let that = this;
    if (that.data.hasMore) {
      that.getHotBooks();
    }
  },

  onChangeTab: function (e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      tabIndex: index,
    });
  },
  onPressHuati: function (e) {
    let that = this;
    let index = e.currentTarget.dataset.index;
    
    wx.navigateTo({
      url: '/pages/home/home',
    });
  },
  onPressItem: function (e) {
    let tag = e.currentTarget.dataset.tag;
    console.log(tag);
  },
});
