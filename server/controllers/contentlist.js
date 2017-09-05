import contentlist from '../models/contentlist.js'

const getContentlist = async function (ctx) {
  const id = ctx.params.id // 获取url里传过来的参数里的id
  const result = await contentlist.getContentListById(id) // 通过await “同步”地返回查询结果
  ctx.body = result // 将请求的结果放到response的body里返回
}

export default {
  getContentlist
}
