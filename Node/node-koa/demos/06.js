const Koa = require('koa');
const route = require('koa-route')
const app = new Koa()

const about = (ctx) => {
    ctx.response.type = 'html'
    ctx.response.body = '<a href="/home"> index Page</a>'
}
const main = (ctx) => {
    ctx.response.body = 'hello world'
}

app.use(route.get('/', about))
app.use(route.get('/home', main))

app.listen(3000)