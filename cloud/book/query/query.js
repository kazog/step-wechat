const cloud = require('wx-server-sdk');

cloud.init({
    env: cloud.DYNAMIC_CURRENT_ENV
});
const db = cloud.database();

const $ = db.command.aggregate;

// 查询数据库集合云函数入口函数
exports.main = async (event, context) => {
    // 返回数据库查询结果
    //   return await db.collection('sales').get();

    // 返回数据库聚合结果
    return db.collection('sales').aggregate()
        .group({
            _id: '$region',
            sum: $.sum('$sales')
        })
        .end();
};
