// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database()
  const _ = db.command
  const wxid = cloud.getWXContext().OPENID
  const wxid2 = event.wxId;

  // let list = await db.collection('time_axis').where({
  //   wxid: _.eq(wxid).or(_.eq(wxid2)),
  //   status: _.eq(0)
  // }).get()

  let list = await db.collection('time_axis').where({
    wxid: _.eq(wxid).or(_.eq(wxid2)),
    status: _.eq(0)
  }).get()

  return {
    list: list.data
  }
}