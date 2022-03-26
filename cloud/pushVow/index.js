// 发布瞬间
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


  let res = await db.collection('make_vow').add({
    data: {
      wxid,
      dateStr: event.date,
      date: Date.now(),
      title: event.title,
      img: event.img,
      memo: event.memo,
      type: event.type,
      desc: event.desc,
    }
  })

  return {
    id: res._id,
    message: ''
  }
}