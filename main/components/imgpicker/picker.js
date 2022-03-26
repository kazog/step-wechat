// components/image_picker/image_picker.js
Component({

  properties: {
    datas: {
      type: Array,
      value: []
    },
    upload: {
      type: Boolean,
      value: true,
    },
    maxCount: {
      type: Number,
      value: 9,
    }
  },

  data: {
    count: 0,
  },

  attached: function () {
    let that = this;
    if (that.data.upload) {
      that._filter();
    }
  },

  methods: {
    // 点击预览大图
    onTap: function (e) {
      let that = this;
      // 是否上传的时候禁止点击查看大图
      if (that.data.upload) {
        // return;
      }
      let index = e.currentTarget.dataset.index;
      let imgs = that.data.datas;
      console.log(imgs);
      imgs = imgs.filter((re) => re != null);
      wx.previewImage({
        current: imgs[index], // 当前显示图片的http链接
        urls: imgs // 需要预览的图片http链接列表
      })
    },
    // 上传图片
    onUpdate: function () {
      let that = this;
      if (that.data.count >= that.data.maxCount) {
        return;
      }
      let count = that.data.maxCount - that.data.count;
      wx.chooseImage({
        count,
        sizeType: ['compressed'], // 'original'
        sourceType: ['album', 'camera'],
        success: (res) => {
          that.data.datas.push(...res.tempFilePaths);
          // let imgs2 = res.tempFiles;
          that._filter();
          that.onChange();
        }
      })
    },
    // 删除图片
    onDel: function (e) {
      let that = this;
      let tag = e.currentTarget.dataset.index;
      that.data.datas = that.data.datas.filter((_, index) => index != tag);
      that._filter();
      that.onChange();
    },
    // 改变图片
    onChange: function () {
      let that = this;
      let datas = that.data.datas;
      // let datas = that.data.datas.filter((e) => e != null);
      let count = datas.length - 1;
      that.triggerEvent('change', {
        count,
        value: datas
      })
    },
    // 更新列表
    _filter: function () {
      let that = this;
      let datas = that.data.datas.filter((e) => e != null);
      let count = datas.length;
      if (count < that.data.maxCount) {
        datas.push(null);
      }
      that.setData({
        count,
        datas
      });
    }
  }
})