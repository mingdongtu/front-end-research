const express = require('express');
const app = express();
const port = 8081;
const fs = require('fs');
const path = require('path');
const md5 = require('md5')

app.get('/',(req,res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Document</title>
    </head>
    <body>
        Http Cache Demo
        <script src="./demo.js"></script>
    </body>
    </html>`)
})
const moment = require('moment')

// app.get('/demo.js',(req, res)=>{
//     let jsPath = path.resolve(__dirname,'./demo.js');
//     let cont = fs.readFileSync(jsPath);
//     // res.setHeader('Expires',getGLNZ())   //强制缓存1
//     // res.setHeader('Cache-Control','public,max-age=120') //强制缓存   120s 内继续使用浏览器缓存
//     let status = fs.statSync(jsPath) //获取状态

//     let lastModified = status.mtime.toUTCString();
//     if(lastModified === req.headers['if-modified-since']){  //如果浏览器缓存过期 那么比对上次修改时间
//            res.writeHead(304,'Not Modified') //设置返回请求头
//            res.end();
//     }else{
//            res.setHeader('Cache-Control','public,max-age=5'); //重新设置Cache-Control 的过期时间
//            res.setHeader('Last-Modified',lastModified);
//            res.writeHead(200,ok);
//            res.end(cont)

//     }
//     res.end(cont)
// })
app.get('/demo.js',(req, res)=>{
    let jsPath = path.resolve(__dirname,'./demo.js');
    let cont = fs.readFileSync(jsPath);
    let etag = md5(cont)
     
    if(req.headers['if-none-match']===etag){  //如果一致
           res.writeHead(304,'Not Modified');
           res.end()
    }else{// 不一致
          res.setHeader('Etag',etag)
          res.writeHead(200,'ok');
          res.end(cont)
    }
})
function getGLNZ(){
    return moment().utc().add(2,'m').format('ddd, DD MMM YYYY HH:mm:ss')+' GMT';
}
app.listen(port,()=>{
    console.log(`listen on ${port}`)    
})
