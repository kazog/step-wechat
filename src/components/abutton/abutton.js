// 按钮封装
Component({
  properties: {
    aclass: {
      type: String,
      value: "v-app-button",
    },
    hover: {
      type: String,
      value: null,
    },
    tag: { // 埋点tag
      type: String,
      value: null,
    },
  },
  data: {},
  lifetimes: {
    attached: function () {},
    detached: function () {},
  },
  methods: {
    onClick: function () {
      let tag = this.data.tag;

    },
    onLongClick: function () {
      let tag = this.data.tag;
    },
  },
});
