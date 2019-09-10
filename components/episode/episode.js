// components/episode/episode.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    ranking: {
      type: Number,
      observer: function (newVal, oldVal, changePath) {
        let rank = newVal < 10 ? '0'+newVal : newVal
        this.setData({
          _ranking: rank
        })
      }
    },
    date: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _ranking: 0,
    year: 1999,
    month: '',
    monthList: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月','十月','十一月','十二月']
  },
  ready: function (){
    const newDate = new Date(this.properties.date)
    const year = newDate.getFullYear()
    const monthIndex = newDate.getMonth()
    this.setData({
      year: year,
      month: this.data.monthList[monthIndex]
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
