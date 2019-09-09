import fetch from '../utils/fetch.js'

export default {
  getdata () {
    return fetch.get('/getdata')
  }
}



