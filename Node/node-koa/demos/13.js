const Koa = require('koa')
const app = new Koa()
const compose = require('koa-compose')
const Logger = (ctx, next) => {
    console.log(`${Date.now()}${ctx.request.url}`)
    next()
}
const main = ctx => {
    ctx.response.body = 'hello world'
}
const middleWares = compose([Logger, main])
app.use(middleWares)
app.listen(3000)