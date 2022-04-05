// components/search/search.js
Component({
  properties: {
    searchStr: {
      type: String,
      value: ''
    }
  },

  data: {
    inputStr: ''
  },
  observers: {
    searchStr: function(key) {
      this.setData({
        inputStr: key
      })
    }
  },
  methods: {

  }
})
