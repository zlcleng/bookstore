import fetch from '../utils/fetch.js'

export default {
  getRecommendList () {
    return fetch.get('/recommendList')
  }
}



