//服务端
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
const app = new Koa()

app.use(bodyParser())

app.on('erorr', (err, ctx) => {
    console.log('server errror', err)
})

app.listen(3001, () => {
    console.log('server is running in localhost:3001')
})

export default app