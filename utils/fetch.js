import config from '../config.js'

// 实现Promise的finally方法
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
}

const request = function (url, data, method) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.base_url + url,
      data,
      method,
      header: {
        'content-type': 'application/json',
        'X-Auth-Token': wx.getStorageSync('token')
      },
      dataType: 'json',
      responseType: 'text',
      success:(res) => {
        const code = res.code
        if (code === 200) {
          resolve(res.data)
        } else if (code === '301' || code === '302') {
          wx.navagateTo({
            url: '../pages/index'
          })
          reject(res)
        } else {
          wx.showToast({
            title: res.message || res.msg,
            duration: 3000
          })
          reject(res)
        }
      },
      fail: function (err) {
        wx.showToast({
          title: '网络出错啦！！！！',
          duration: 3000
        })
        reject(err)
      }
    })
  })
}

const fetch = {
  get: ( url, data= {}) => request (url, data, 'GET'),
  post: ( url, data = {} ) => request( url, data, 'POST'),
  put: ( url, data = {} ) => request( url, data,'PUT'),
  delete: ( url, data = {} ) => request( url, data, 'DELETE')
}

export default fetch