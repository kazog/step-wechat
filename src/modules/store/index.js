/**
 * Author: Meng
 * Date: 2022-03
 * Desc: 存储数据 - 
 */

const ACCOUNT = "account_data_info"; // 账号
const ADDRESS = "cur_address_data"; // 地址
const LOGIN = "login_status"; // 
const SHOP = "cur_shop_info"; // 店铺
const TOKEN = "account_token"; // 

// 获取登录信息
export function getAccountInfo() {
  return wx.getStorageSync(ACCOUNT);
}
// 设置登录信息
export function setAccountInfo(data) {
  wx.setStorage({
    key: ACCOUNT,
    data,
  });
}

// 判断是否登录
export function hasLogin() {
  return wx.getStorageSync(ACCOUNT);
}

// 检测是否登录
export function checkLogin(isLogin=true, params) {
  const login = hasLogin();
  if(isLogin) {
    wx.navigateTo({
      url: '/pages/my/login/login?params=' + params,
    });
  }
  return login;
}

// 获取Token
export function getTokenStr() {
  return wx.getStorageSync(TOKEN);
}

// 获取地址信息
export function getAddress() {
  return wx.getStorageSync(ADDRESS);
}
// 设置地址信息
export function setAddress(data = "") {
  wx.setStorage({
    key: ADDRESS,
    data,
  });
}

// 获取店铺信息
export function getShopInfo() {
  return wx.getStorageSync(SHOP);
}
// 设置店铺信息
export function setShopInfo(data) {
  wx.setStorage({
    key: SHOP,
    data,
  });
}

export function clearAccount() {
  wx.removeStorage({ key: ACCOUNT });
  wx.removeStorage({ key: TOKEN });
}
