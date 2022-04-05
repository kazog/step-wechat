const create = require('./create/create')
const query = require('./query/query')
const update = require('./update/update')

// 云函数入口函数
exports.main = async (event, context) => {
    switch (event.type) {
        case 'create':
            return await create.main(event, context);
        case 'query':
            return await query.main(event, context);
        case 'update':
            return await update.main(event, context);
    }
}