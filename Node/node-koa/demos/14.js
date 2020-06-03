const Koa = require('koa')
const app = new Koa()

const main = (ctx, next) => {
    ctx.response.status = 404
    ctx.response.body = 'NOT FUND'
}
app.use(main)
app.listen(3000)