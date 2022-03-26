// 

import {getVows} from '../../../modules/apis/cloudApi';

Page({

  data: {

  },

  onLoad: function (options) {

  },

  getVowList: function() {
    getVows().then((res) => {

    })
  },

  onUnload: function () {

  },

})