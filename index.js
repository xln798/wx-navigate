/* eslint-disable no-unused-vars */
Component({
  observers: {},
  behaviors: [],
  properties: {
    title: { // 属性名
      type: String,
      value: '标题'
    },
    icon: { // 属性名
      type: String,
      value: './assets/back.png'
    },
  },
  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
      this.getStyle()
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  data: {
    style: '',
    style2: ''
  },
  methods: {
    getStyle() {
      wx.getSystemInfo({
        success: (res) => {
          const marginTop = `${res.statusBarHeight}`

          const {
            height, width, top, left, right
          } = wx.getMenuButtonBoundingClientRect()
          // eslint-disable-next-line radix
          const uptop = parseInt(height + top)
          this.triggerEvent('getTop', {uptop})
          this.setData({
            style: `height:${height}px;line-height:${height}px;padding:${top - res.statusBarHeight}px;padding-top:${top}px;`,
            style2: `padding-top:${uptop}px`
          })
        }
      })
    },
    iconClick() {
      this.triggerEvent('iconClick')
    },
  }
})
