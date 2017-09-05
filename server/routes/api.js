import api from '../controllers/contentlist.js'
import koa_router from 'koa-router'
const router = koa_router()

router.get('/contentlist/:id', api.getContentlist)

export default router
