const express = require('express');
// express 第一个最火的企业级框架 koa 
// 阿里三件套  egg antd 
const app = express(); 
const path = require('path');
// img js css json 都是静态资源文件 统一放在一个文件下

app.use(
    //静态服务器
    express.static(
    path.join(__dirname + './public')
))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
})
// app.get('/public/js/chat.js', (req, res) => {
//   res.sendFile(__dirname + '/public/js/chat.js');
// })
// app.get('/public/css/common.css', (req, res) => {
//   res.sendFile(__dirname + '/public/css/common.css');
// })
app.listen(1234, () => {
  // webrtc 
  console.log('应用在3020端口上伺服')
})
