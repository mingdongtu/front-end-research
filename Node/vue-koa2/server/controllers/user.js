//执行getUserById方法

import user from '../models/user.js'
const jwt = require('jsonwebtoken')
    //Note that koa-jwt no longer exports the sign, verify and decode
    // functions from jsonwebtoken in the koa-v2 branch.
const getUserInfo = async function(ctx, next) { //node.js中间件
        const id = ctx.params.id;
        const result = await user.getUserById(id);
        console.log(result)
        ctx.response.body = result
    }
    //新增一个方法，通过用户名查找
const getUserAuth = async function(ctx, next) {
    const data = ctx.request.body;
    const userInfo = user.getUserByName(data.name);
    if (userInfo != null) {
        //如果查无此用户，返回null
        if (userInfo.password !== data.password) {
            ctx.response.body = {
                success: false,
                info: '密码错误'
            }
        } else { //密码正确
            const userToken = {
                    name: userInfo.name,
                    id: userInfo.id
                }
                /**
                 userToken里面的内容是可以自定义的，加密后存储在 token 里返回给前端，
                 前端如果想拿到 token 里面的内容，需要解码，安装koa-jwt，
                 从koa-jwt导入jwt，然后调用jwt.decode(token)拿到userToken里面的内容。
                 */
            const secret = 'vue-koa-demo' //指定密钥，这是未来用来判断token合法性的标志
            const token = jwt.sign(userToken, secret)
            ctx.response.body = {
                success: true,
                token
            }

        }
    } else {
        //用户不存在
        ctx.response.body = {
            success: false,
            info: '用户不存在'
        }
    }
}
export default {
    getUserInfo,
    getUserAuth
}