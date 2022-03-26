// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database()
  const _ = db.command
  const wxid = cloud.getWXContext().OPENID
  let info = await db.collection('users').where({
    wxid: _.eq(wxid)
  }).get()

  return {
    info: info.data
  }
}