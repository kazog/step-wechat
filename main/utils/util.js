const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 字符串判空
function isEmpty(e) {
  return e == null || e.length === 0 || e === 'null';
}

// 全部替换key需要替换的字符 key1新的字符
function replaceAll(value, key, key2) {
  return value.replace(new RegExp(key, 'gm'), key2);
}

//手机号正则 phoneRe.test(15678045718) true
const phoneRe = /(^1[3456789][0-9]{9}$)/;

const isPhone = function (str) {
  if (phoneRe.test(str)) {
    return true
  }
  return false
}

module.exports = {
  isEmpty: isEmpty,
  isPhone: isPhone,
  replaceAll: replaceAll,
  formatTime: formatTime
}
