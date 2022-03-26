// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

/**
 */
exports.main = async (event, context) => {
  // 获取 WX Context (微信调用上下文)，包括 OPENID、APPID、及 UNIONID（需满足 UNIONID 获取条件）等信息
  const db = cloud.database()
  const _ = db.command
  const wxid = cloud.getWXContext().OPENID
  let bgimg = 'https://6779-gyj-6g0zshxaeba3ac48-1304840251.tcb.qcloud.la/user/bg/bg02.jpg?sign=44c27d032826620942759ec823d8c356&t=1618974906'
  let list = await db.collection('users').where({
    wxid: _.eq(wxid)
  }).get()
  if (!list.data || list.data.length < 1) {
    let name = Date.now() + '';
    name = 'G' + name.substring(4, name.length)
    let code = (Date.now() + 129213) + ''
    code = code.substring(5, 12)
    await db.collection('users').add({
      data: {
        wxid,
        name,
        bgimg,
        uid: name,
        contactUid: '',
        password: 'K123654',
        shareCode: 'G' + code + 'Y',
        icon: '',
        level: 0,
        role: 0,
        update: false
      }
    })
  }

  return {
    bgimg,
    openid: wxid,
  }
}