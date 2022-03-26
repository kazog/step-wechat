// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database()
  const wxid = cloud.getWXContext().OPENID
  const wxid2 = event.wxId||''
  const _ = db.command
  let list = await db.collection('invite').where({
    wxid: _.eq(wxid).or(_.eq(wxid2)),
    status: _.eq(0)
  }).get()

  return {
    list: list.data,
  }
}