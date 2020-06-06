const Koa = require('koa')
const app = new Koa()
const koaBody = require('koa-body')
const main = async function(ctx) {
    const body = ctx.request.body
    console.log(ctx.request)
    if (!body.name) ctx.throw(400, '.name required')
    ctx.body = { name: body.name }
}
app.use(main)
app.use(koaBody())
app.listen(3000)