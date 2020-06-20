//这个是后端脚本

//服务端
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import router from './server/routes/router.js'
import serve from 'koa-static'
import path from 'path'
const app = new Koa()

app.use(bodyParser())
    //把路由挂载到app上
router(app)  //调用路由相关中间件
app.use(serve(path.resolve('dist')))  //将webpack 打包好的项目目录作为Koa静态文件服务的目录
/*
 注意app.use(serve(path.resolve('dist')))这句话要放在router(app)的后面，koa 的运行机制是谁先被 use，
 谁的规则就先执行，如果我们放到 router(app)前面，那么每次发送 API 请求的时候，都会先给我们返回一个完整的页面，再返回数据
 */
/*
 保存，重新运行node index.js，看到server is running at http://localhost:3000，打开http://localhost:3000,会发现自动跳转到登录页面：
*/
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