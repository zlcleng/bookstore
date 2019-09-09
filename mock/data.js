let WxMock = require("./WxMock.js")

const getRecommendList = WxMock.mock("https://z.cn/recommendList", {
  "code": 200,
  "data":{
    "content": "人生不能像下厨一样，等所有的料准备好才下锅",
    "fav_nums": 28,
    "id": 246,
    "image": "../../mock/images/shi_ju.jpg",
    "index": 1,
    "like_status": 0,
    "pubdate": "2019-08-02",
    "title": "小小的愿望",
    "type": 100
  },
  "message": "获取成功！"
})


export default {
  getRecommendList
}