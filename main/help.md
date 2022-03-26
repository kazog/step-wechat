"navigationStyle": "custom", 
"enablePullDownRefresh": true,
"navigationBarTitleText": "个人中心",

Page({

  data: {
    tabIndex: 1,
  },

  onLoad: function (options) {

  },

  onReady: function () {

  },

  onShow: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  }
})

// 绝对布局使用
.item-layout {
  overflow: hidden;
  position: relative;
  height: 468rpx;
}
.item-collect {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
}