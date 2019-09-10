let WxMock = require("./WxMock.js")

const getRecommendList = WxMock.mock("https://z.cn/recommendList", {
  "code": 200,
  "data":{
    "content": "balbal巴拉巴拉巴拉",
    "fav_nums": 28,
    "id": 246,
    "image": "../../mock/images/shi_ju.jpg",
    "index": 6,
    "like_status": 0,
    "pubdate": "2019-09-10",
    "title": "小小的愿望",
    "type": 100
  },
  "message": "获取成功！"
})
const triggerLike = WxMock.mock("https://z.cn/triggerLike", {
  "code": 200,
  "data": {},
  "message": "取消/收藏成功！"
})

export default {
  getRecommendList,
  triggerLike
}