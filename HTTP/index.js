const express = require('express');
const app = express();
const port = 8080;
const fs = require('fs');
const path = require('path');

app.get('/', (req, res) => {
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
const moment = require('moment');
app.get('/demo.js', (req, res) => {
    console.log('我来了')
    let jsPath = path.resolve(__dirname, './demo.js');
    let cont = fs.readFileSync(jsPath);
    res.setHeader('Expires', getGLNZ()) //2分钟
    res.end(cont)
})

function getGLNZ() {
    return moment().utc().add(2, 'm').format('ddd, DD MMM YYYY HH:mm:ss') + ' GMT';
}
app.listen(port, () => {
    console.log(__dirname)
    console.log(`listen on ${port}`)
})