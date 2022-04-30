// 搜索
Component({
  properties: {
    keyword: {
      type: String,
      value: ''
    }
  },

  data: {
    inputStr: ''
  },
  observers: {
    'keyword': function(key) {
      this.setData({
        inputStr: key
      })
    }
  },
  methods: {

  }
})
