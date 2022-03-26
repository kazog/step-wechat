// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database()
  const _ = db.command
  let status = 0;
  let inviteId = ''
  if (event && event.status) {
    const id = event.id
    const tag = event.status

    let res = await db.collection('invite').where({
      _id: _.eq(id)
    }).update({
      data: {
        status: tag
      }
    })
    status = res.stats.updated
  }else if(event && event.title){
    const wxid = cloud.getWXContext().OPENID
    let res = await db.collection('invite').add({
      data: {
        wxid,
        dateStr: event.date,
        date: Date.now(),
        title: event.title,
        pic: event.pic,
        memo: event.memo,
        type: event.type,
        content: event.content,
        address: event.address,
        addressName: event.addressName,
        lat: event.lat,
        lng: event.lng,
        phone: event.phone,
        user: event.user,
        status: 0
      }
    })
    inviteId = res._id;
    status = res._id != null ? 0 : 2;
  }else {
    status = -1
  }

  return {
    id: inviteId,
    status
  }
}