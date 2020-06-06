//前端需要指定的路由才能调用这个方法

import KoaRouter from 'koa-router'
import UserController from '../controllers/user.js'
const router = new KoaRouter();

export default function(app) {
    router.post('/user/:id', UserController.getUserInfo)
    router.post('/api/user', UserController.getUserAuth)
    app.use(router.routes()).use(router.allowedMethods())
}