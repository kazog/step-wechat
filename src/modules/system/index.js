/**
 * Author: Meng
 * Date: 2022-03
 * Desc: 小程序 系统 API -
 */

import { authorize, Scope } from "../auth/index";

// 获取地址
function getLocation() {
  return new Promise(async (resolve) => {
    const res = await authorize(Scope.location);
    if (res.status) {
      wx.getLocation({
        type: "wgs84",
        success: (res) => {
          if (res.latitude) {
            resolve(res);
          } else {
            resolve(null);
          }
        },
        fail: (err) => {
          console.log(err);
          resolve(null);
        },
      });
    } else {
      resolve(null);
    }
  });
}

const Wechat = {
  getLocation,
};
export default Wechat;
