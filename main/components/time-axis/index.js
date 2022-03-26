// page/pages/my/auth/component/flow-node/index.js
Component({
  properties: {
    datas: Array,
  },

  data: {
    pointIcon: '/assets/icon/light-point.png',
    size: 0,
  },
  attached: function () {
    let that = this;
    let size = that.data.datas.length - 1;
    that.setData({
      size
    });
  },
  methods: {
    onItemPress: function (e) {
      let item = e.currentTarget.dataset.item;
      let index = e.currentTarget.dataset.index;
      item.index = parseInt(index)
      this.triggerEvent('press', item);
    }
  }
})