const Koa = require('koa')

const app = new Koa()
const path = require('path');
const os = require('os') //操作系统模块
const koabody = require('koa-body')

const main = async function(ctx) {
    const tmpdir = os.tmpdir() //以字符串的形式返回操作系统默认临时目录
    const filePaths = [] //存储文件路径
    const files = ctx.request.body.files || {}

    for (key in files) {
        const file = files[key]
        const filePath = path.join(tmpdir, file.name)
        const reader = fs.createReadStream(file.path)
        const writer = fs.cteateWriteStream(filePath);
        reader.pipe(writer) //reader 里面的所有数据，推送到filePath对应的文件里面里面去

        filePaths.push(filePath)
    }
    ctx.body = filePaths
}

app.use(main)
app.use(koabody({ multipart: true }))

app.listen(3000)