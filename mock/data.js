let WxMock = require("./WxMock.js")

const getdata = WxMock.mock("https://z.cn/getdata", {
  "code": 200,
  "data":{
    "content": "人生不能像下厨一样，等所有的料准备好才下锅",
    "fav_nums": 28,
    "id": 246,
    "image": "./images/xiao_xiao_yuan_wang.jpg",
    "index": 1,
    "like_status": 0,
    "pubdate": "2019-08-02",
    "title": "小小的愿望",
    "type": 100
  },
  "message": "获取成功！"
})

const user = WxMock.mock("https://z.cn/user", {
  "code": 200,
  "mmessage": "用户信息"
})  

export default {
  getdata,
  user
}