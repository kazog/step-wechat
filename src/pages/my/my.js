/**
 * Author: Meng
 * Date: 2022-04
 * Desc: 我的
 */
Page({
  data: {
    isLogin: false,
    user: {
      headPicUrl: "",
      nickName: "立即登录",
      phone: "",
    },
    integrate: 0, // 积分
    couponNum: 0, // 优惠券
    footprint: 0, // 足迹
    menulist: [
      {
        name: "分享好友",
        key: "",
        icon: "/images/icon/m_share.png",
        path: "/pages/my/share/share",
      },
      {
        name: "意见反馈",
        key: "",
        icon: "/images/icon/m_feedback.png",
        path: "/pages/my/feedback/feedback",
      },
      {
        name: "赞赏",
        key: "",
        icon: "/images/icon/m_gift.png",
        path: "/pages/my/aid/aid",
      },
      {
        name: "关于",
        key: "",
        icon: "/images/icon/m_about.png",
        path: "/pages/my/about/about",
      },
      {
        name: "设置",
        key: "",
        icon: "/images/icon/m_setting.png",
        path: "/pages/my/setting/setting",
      },
    ],
  },

  onLoad: function (options) {},

  onReady: function () {},

  onShow: function () {
    let that = this;
  },

  onPullDownRefresh: function () {},

  onPressItem: function (e) {
    let that = this;
    let index = e.currentTarget.dataset.index;
    if (index === 0) {
      if (that.showLogin()) {
        return;
      }
    }

    wx.navigateTo({
      url: that.data.tablist[index].path,
    });
  },

  onTabPress: function (e) {
    let that = this;
    let index = e.currentTarget.dataset.index;
    let url = "/pages/my/order/order";
    if (!that.data.isLogin) {
      url = "/pages/my/login/login";
    }
    wx.navigateTo({
      url,
    });
  },

  onInfoPress: function () {
    let that = this;
    let url = "/pages/my/info/info";
    if (!that.data.isLogin) {
      url = "/pages/my/login/login";
    }
    wx.navigateTo({
      url,
    });
  },

  showLogin: function () {
    let that = this;
    if (!that.data.isLogin) {
      wx.showModal({
        title: "请先登录",
        content: "您还未登录请先登录",
        success: (e) => {
          if (e.confirm) {
            wx.navigateTo({
              url: "/pages/my/login/login",
            });
          }
        },
      });
      return true;
    }
    return false;
  },
});
