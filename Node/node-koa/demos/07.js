const Koa = require('koa');
const serve = require('koa-static')
const path = require('path')
const main = serve(path.join(__dirname))

const app = new Koa()

app.use(main)

app.listen(3000)