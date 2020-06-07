//服务端
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import router from './server/routes/router.js'
const app = new Koa()

app.use(bodyParser())
    //把路由挂载到app上
router(app)
    //修改app.js,捕捉jwt验证失败的错误信息
app.use(async function(ctx, next) {
    try {
        await next()
    } catch (err) {
        if (err.status === 401) {
            ctx.status = 401;
            ctx.body = {
                success: false,
                token: null,
                info: '没有权限'
            }
        } else {
            throw err
        }
    }
})

app.on('erorr', (err, ctx) => {
    console.log('server errror', err)
})

app.listen(3001, () => {
    console.log('server is running in localhost:3001')
})

export default app