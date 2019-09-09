// components/heart/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Boolean
    },
    count: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    like: false,
    disLikeSrc: '../images/disLike.png',
    likeSrc: '../images/like.png',
    count: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tapHeart: function () {
      let {like, count} = this.properties
      count = like ? count-1 : count+1
      this.setData({
        like: !like,
        count
      })
    }
  }
})