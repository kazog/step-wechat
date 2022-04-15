// 
Component({
  properties: {
    tabs: {
      type: Array,
      value: []
    },
    index: {
      type: Number,
      value: 0
    }
  },

  data: {
    tabIndex: 0,
  },
  methods: {
    onChangeTab: function(e) {
      let index = e.currentTarget.dataset.index;
      this.setData({
        tabIndex: index,
      });
    }
  }
})
