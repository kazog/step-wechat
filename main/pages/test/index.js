/**
 * 
 */
Page({

    data: {
        itemList: [
            { title: '金蛇郎君', img: '', tag: 0 },
            { title: '', img: '', tag: 0 },
            { title: '', img: '', tag: 0 },
            { title: '啦啦啦', img: '', tag: 0 },
            { title: '', img: '', tag: 0 },
            { title: '', img: '', tag: 0 },
            { title: '啦啦啦2', img: '', tag: 0 },
            { title: 'lkllk', img: '', tag: 0 },
            { title: '', img: '', tag: 0 },
            { title: '', img: '', tag: 0 },
            { title: '啦啦啦3', img: '', tag: 0 },
            { title: '走走哦赞1', img: '', tag: 0 },
            { title: '走走哦赞2', img: '', tag: 0 },
            { title: '', img: '', tag: 0 },
            { title: '啦啦啦3', img: '', tag: 0 },
            { title: '走走哦赞1', img: '', tag: 0 },
            { title: '走走哦赞2', img: '', tag: 0 },
            { title: '', img: '', tag: 0 },
            { title: '', img: '', tag: 0 },
            { title: '啦啦啦3', img: '', tag: 0 },
            { title: '走走哦赞1', img: '', tag: 0 },
            { title: '走走哦赞1', img: '', tag: 0 },
        ]
    },

    onLoad: function (options) {

    },

    onReady: function () {
        this.parseData()
    },

    parseData: function () {
        let left = 0;
        let tag = 1;
        const list = this.data.itemList;

        list.forEach(e => {
            tag = tag == 1 ? 0 : 1;
            if (tag == 0) {
                left += e.title.length > 0 ? 1 : 0;
            } else {
                left -= e.title.length > 0 ? 1 : 0;
            }
            if (left % 4 == 3) {
                tag = tag == 0;
                left = 0;
            }
            e.tag = tag;
        });
        console.log(list)
        this.setData({
            itemList: list
        })
    },

    onHide: function () {

    },

    onUnload: function () {

    },

    onPullDownRefresh: function () {

    },

    onReachBottom: function () {

    }
})