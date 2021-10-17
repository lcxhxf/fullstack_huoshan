const express = require('express');
const app = express();
const path = require('path');
// 引入数据库 MVC
const Redis = require('ioredis')

const redis = new Redis({
    port: 6379,
    host: '127.0.0.1'
})
// 内存数据库 redis  比mysql快
// const fs = require('fs')
// let count = 0;  
// -> 持久化存储里读取 mysql
// 引入模板 JSX
// ejs
// 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/',async(req, res) => {
    // res.send('hello');
    // 用户来的时候，内存中，去到文件里 index.html
    // 引入fs 模块 fs.readFile I/O 异步
    // 文件支持流操作
    let count = Number(await redis.get('count') || 0)
    count++;
    await redis.set('count', count);
    res.render('index', { count: count})
    // res.send(`网站访问数${count}`);
    // fs.createReadStream('./index.html').pipe(res);
})
app.listen(1234);