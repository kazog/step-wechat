// 发布瞬间
const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 */
exports.main = async (event, context) => {
  // 获取 WX Context (微信调用上下文)，包括 OPENID、APPID、及 UNIONID（需满足 UNIONID 获取条件）等信息
  const db = cloud.database()
  const _ = db.command
  const wxid = cloud.getWXContext().OPENID

  let list = await db.collection('time_axis').where({
    wxid: _.eq(wxid),
    dateStr: _.eq(event.date),
    status: _.eq(0),
  }).get()
  if (list.data.length > 0) {
    const id = list.data[0]._id;
    await db.collection('time_axis').where({
      _id: _.eq(id)
    }).update({
      data: {
        status: 1
      }
    })
  }

  // const dateStr = [year, month, day].map(formatNumber).join('-');

  let res = await db.collection('time_axis').add({
    data: {
      wxid,
      status: 0,
      date: Date.now(),
      dateStr: event.date,
      title: event.title,
      subtitle: event.subtitle,
      invite: event.invite,
      imgs: event.imgs,
      memo: event.memo,
      tid: event.tid,
      type: event.type,
      desc: event.desc,
    }
  })

  return {
    id: res._id,
    message: ''
  }
}