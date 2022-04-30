/**
 * Author: Meng
 * Date: 2022-04
 * Desc: 登录
 */

import { Scope, authorize } from "../../../modules/auth/index";

Page({
  data: {
    account: "",
    password: "",
    canIUseProfile: false,
  },
  onLoad: function (options) {
    let that = this;
    if (wx.getUserProfile) {
      that.setData({
        canIUseProfile: true,
      });
    }
  },
  bindInputPhone: function (e) {
    this.data.account = e.detail.value;
  },
  bindInputPwd: function (e) {
    this.data.password = e.detail.value;
  },
  onLogin: function () {
    console.log(this.data);
  },
  getUserInfo: function (e) {
    console.log("getUserInfo");
    authorize(Scope.userInfo).then((res) => {
      console.log(res);
      wx.getUserInfo({
        desc: "用于完善会员资料",
        success: (res) => {
          console.log(res);
        },
      });
    });
  },
  getUserProfile: function (e) {
    console.log("getUserProfile");
    wx.getUserProfile({
      desc: "用于完善会员资料",
      success: (res) => {
        console.log(res);
      },
    });
  },
});
