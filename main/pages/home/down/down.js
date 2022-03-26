// 
import {
  getInfo
} from '../../../modules/store/index';
import {
  download
} from '../../../modules/net/index';

const sizeKy = ['original', 'portrait', "large2x", 'large', 'landscape'];
Page({
  data: {
    iurl: '',
    srcs: {},
  },
  onLoad: function (options) {
    let that = this;
    // large2x large portrait original landscape
    // console.log(options)
    that.setData({
      iurl: options.tag,
    })
    that.data.srcs = getInfo();
  },
  onReady: function () {
    wx.showToast({
      title: '图片较大，努力加载中...',
      duration: 600
    })
  },
  onDown: function () {
    wx.showActionSheet({
      itemList: ['4K-下载时间较长', '2K', '普通'],
      success: (res) => {
        const ind = res.tapIndex;
        this.downImg(ind)

      }
    })
  },
  onPlayMusic: function () {
    // let that = this;
    // let play = wx.getBackgroundAudioManager();
    // if (!that.data.isPlay) {
    //   let num = new Date().getMinutes() % 16;
      
    //   let music = that.data.musicList[num]
    //   play.src = music.value;
    //   play.title = music.key;
    //   play.coverImgUrl = 'cloud://aaplus123210.6161-aaplus123210-1304840196/app/img/bg001.jpg'
    //   that.data.isPlay = true;
    // } else {
    //   play.stop();
    //   that.data.isPlay = false;
    // }

    // play.play()
  },
  onPress: function () {
    let tag = this.data.srcs;
    wx.previewImage({
      urls: [tag.large],
    })
  },
  downImg: async function (ind) {
    let key = sizeKy[ind];
    let img = this.data.srcs[key];

    const {
      success,
      data
    } = await download(img);
    if (success) {
      wx.saveImageToPhotosAlbum({
        filePath: data,
        success: (res) => {
          if (res.errMsg.indexOf(':ok') > -1) {
            wx.showToast({
              title: '保存成功！',
            })
          }
        }
      })
    } else {
      wx.showToast({
        title: '抱歉，下载失败请重新下载！',
      })
    }
  }
})