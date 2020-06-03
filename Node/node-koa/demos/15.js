const Koa = require('koa')
const app = new Koa()

const handler = async function(ctx, next) {
    try {
        await next()
    } catch (err) {
        ctx.response.status = err.statusCode || err.status || 500
        ctx.response.body = {
            message: err.message
        }
    }
}
const main = (ctx, next) => {
    ctx.throw(500)
}

app.use(handler)
app.use(main)
app.listen(3000)