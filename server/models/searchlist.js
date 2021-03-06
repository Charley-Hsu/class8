import db from '../config/db.js' // 引入todolist的表结构
const searchModel = '../schema/singer.js'
const SearchlistDb = db.Netease // 引入数据库

const Contentlist = SearchlistDb.import(searchModel)

const getSearchlistById = async function (name) {
  const searchlist = await Contentlist.findAll({ // 查找全部的todolist SELECT * FROM [user] WHERE u_name LIKE '%三%'
    where: {
      'name': {
        '$like': '%'+name+'%'
      }
    },
    attributes: ['singer', 'name', 'type', 'id'] // 返回字段
  })

  return searchlist // 返回数据
}

export default {
  getSearchlistById
}
