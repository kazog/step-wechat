// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database()
  const _ = db.command
  const wxid = cloud.getWXContext().OPENID
  let status = 0;
  if(event && event.img) {
    const img = event.img

    let res = await db.collection('users').where({
      wxid: _.eq(wxid)
    }).update({
      data: {
        bgimg: img
      }
    })
    status = res.stats.updated
  }else {
    status = -1
  }
  return {
    status
  }
}