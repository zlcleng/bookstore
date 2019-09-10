// pages/recommend/recommend.js
import { recommendApi } from '../../api/index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommendList: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    recommendApi.getRecommendList().then(data => {
      this.setData({
        recommendList: data
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  /**
   * 加入/取消收藏
   */
  handleLike: function (e) {
    const like_status = e.detail.like_status
    recommendApi.triggerLike({like_status}).then(data => {
      wx.showToast({
        title: like_status ? '收藏成功' : '取消成功',
        icon: 'none',
        duration: 2000
      })
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})