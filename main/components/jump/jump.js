// components/jump/jump.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: String,
      value: ''
    }
  },

  data: {

  },

  methods: {
    onTap: function() {
      this.triggerEvent('press', {})
    }
  }
})
