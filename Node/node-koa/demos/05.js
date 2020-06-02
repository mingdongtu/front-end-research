const Koa = require('koa');
const app = new Koa();
const fs = require('fs')
const main = (ctx) => {
    if (ctx.request.path != '/') {
        ctx.response.type = 'html';
        ctx.response.body = '<a href= "/">index Page</a>'
    } else {
        ctx.response.body = 'hello world'
    }
}
app.use(main)
app.listen(3000)