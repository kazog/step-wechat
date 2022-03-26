/**
 * 
 */

export function getInfo() {
  return wx.getStorageSync('item13_info');
}

export function setInfo(data) {
  
  wx.setStorage({
    key: 'item13_info',
    data
  })
}

export function isLogin() {
  return wx.getStorageSync('user_login') == 1;
}

export function setLogin(data={}){
  setBg(data.bgImg)
  wx.setStorage({
    key: 'user_login',
    data
  })
}

export function getBg() {
  return wx.getStorageSync('user_bgimg');
}

export function setBg(data=''){
  wx.setStorage({
    key: 'user_bgimg',
    data
  })
}

export function getUser() {
  return wx.getStorageSync('user12_info');
}

export function setUser(data){
  wx.setStorage({
    key: 'user12_info',
    data
  })
}

export function clearTimes() {
  wx.removeStorageSync('user12_times');
}

export function getTimeData() {
  return wx.getStorageSync('user12_times');
}

export function setTimes(data){
  wx.setStorage({
    key: 'user12_times',
    data
  })
}

