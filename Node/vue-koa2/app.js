//服务端
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import router from './server/routes/router.js'
const app = new Koa()

app.use(bodyParser())
    //把路由挂载到app上
router(app)
app.on('erorr', (err, ctx) => {
    console.log('server errror', err)
})

app.listen(3001, () => {
    console.log('server is running in localhost:3001')
})

export default app