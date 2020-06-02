const Koa = require('koa')
const route = require('koa-route')
const app = new Koa();

const about = (ctx) => {
    ctx.response.redirect('/')

}
const main = ctx => {
        ctx.response.body = '<a herf= "/">Home Page</a>'
    }
    //当访问‘/a’路径时会自动重定向到‘/’ 路径
app.use(route.get('/', main))
app.use(route.get('/a', about))
    // app.use(main)
app.listen(3000)