//前端需要指定的路由才能调用这个方法

import KoaRouter from 'koa-router'
import UserController from '../controllers/user.js'
import ManagementController from '../controllers/management.js'
import jwt from 'koa-jwt'
const router = new KoaRouter();

export default function(app) {
    //不同的请求路径对应不同的中间件
    router.post('/user/:id', UserController.getUserInfo)
    router.post('/api/user', UserController.getUserAuth)
        //jwt({secret:'vue-koa-demo'}) 是一个中间件
        //这里的jwt({secret: 'vue-koa-demo'})就是要求前端如果想获取/api/getOperator这个 API 的数据，就必须带上token
    router.post('/api/getOperator', jwt({ secret: 'vue-koa-demo' }), ManagementController.getOperator)
        // 增删改查
        /** createOperator,
        updateOperator,
        deleteOperator */
    router.post('/api/createOperator', jwt({ secret: 'vue-koa-demo' }), ManagementController.createOperator)
    router.post('/api/updateOperator', jwt({ secret: 'vue-koa-demo' }), ManagementController.updateOperator)
    router.post('/api/deleteOperator', jwt({ secret: "vue-koa-demo" }), ManagementController.deleteOperator)
    router.post('/api/searchOperator', jwt({ secret: 'vue-koa-demo' }), ManagementController.searchOperator)
    app.use(router.routes()).use(router.allowedMethods())
}