/**
 * Create By: Meng
 * Create Date: 2022-03
 */

App({
  consts: {
    windowWidth: 414,
    screenHeight: 736,
    windowHeight: 688,
    height: 716,
    statusBarHeight: 20,
    bottomBarHeight: 18,
    system: "",
    wifiEnabled: false,
    batteryLevel: 100,
  },
  onLaunch: function () {
    this._initSystem();

    if (!wx.cloud) {
      console.error("请使用 2.2.3 或以上的基础库以使用云能力");
    } else {
      wx.cloud.init({
        // env: 'my-env-id', // 此处请填入环境 ID, 如不填则使用默认环境（第一个创建的环境）
        traceUser: true,
      });
    }
  },
  onShow: function (options) {},
  // 获取系统信息
  _initSystem: function () {
    wx.getSystemInfo({
      success: (res) => {
        console.log(res)
        const bottomBarHeight = res.screenHeight - res.safeArea.bottom;
        this.consts.windowWidth = res.windowWidth;
        this.consts.screenHeight = res.screenHeight;
        this.consts.windowHeight = res.windowHeight;
        this.consts.height = res.safeArea.height;
        this.consts.statusBarHeight = res.statusBarHeight;
        this.consts.bottomBarHeight = bottomBarHeight;
        this.consts.system = res.system;
        this.consts.wifiEnabled = res.wifiEnabled;
        this.consts.batteryLevel = res.batteryLevel;
        console.log(this.consts)
      },
    });
  },
  onHide: function () {},
  onError: function () {},
  onPageNotFound: function () {},
});
