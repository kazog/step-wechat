//
Page({
  data: {
    indicator: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    tabIndex: 0,
    hasMore: true,
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
      },{
        name: "笑傲江湖",
        url:
          "https://cn.bing.com/th?id=OHR.LesserAntilles_ZH-CN3012679657_1920x1200.jpg",
      },
    ],
  },

  onLoad: function (options) {},

  onReady: function () {},

  onShow: function () {},

  onChangeTab: function (e) {
    let tabIndex = parseInt(e.currentTarget.dataset.tag);
    this.setData({
      tabIndex
    })
  },

});
