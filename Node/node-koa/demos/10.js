const Koa = require('koa');
const app = new Koa()


const Logger = (ctx, next) => {
    console.log(`${Date.now()}${ctx.request.url}`);
    next()
}

const main = ctx => {
    ctx.response.body = 'hello world'
}

app.use(Logger)
app.use(main)

app.listen(3000)