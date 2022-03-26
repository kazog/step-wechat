// packageCoin/component/send-alert/alert.js
Component({
  properties: {
    value: {
      type: Object,
      value: {}
    }
  },

  data: {
    icon: '/resource/icon/fa_xing.png',
    msg: '感谢您的捐赠!',
    title: '发行成功',
  },

  methods: {
    onTap: function(e) {
      let tag = e.currentTarget.dataset.tag;
      this.triggerEvent('press', {
        action: tag,
        status: (tag == 'ok')
      })
    }
  }
})
