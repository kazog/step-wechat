/**
 * Author: Meng
 * Date: 2022-04
 * Desc: 书详情
 */
import Colors from "../../../modules/constant/color";
Page({
  data: {
    color: "#50c1f5",
    title: "胡编乱造",
    tabIndex: 0,
  },

  onLoad: function (options) {
    let that = this;
    let num = new Date().getDay();
    that.setData({
      color: Colors.random[num],
    });
  },

  onReady: function () {},

  onPullDownRefresh: function () {},

  onReachBottom: function () {},

  onShareAppMessage: function () {},

  onChangeTab: function (e) {
    let tabIndex = e.detail.idx;
    this.setData({ tabIndex });
  },
});
