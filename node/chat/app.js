const express = require('express');
// express 第一个最火的企业级框架 koa 
// 阿里三件套  egg antd
const path = require('path');
const app = express(); 
const server = require('http').createServer(app);
require('./io.js')(server);
// console.log(path.join(__dirname, './public'));

app.use(
    express.static(
        path.join(__dirname, './public')
    )
)
// img js css json 这些都叫静态资源，
// 统一放到第一个文件夹下

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
})
// app.get('/public/js/chat.js', (req, res) => {
//   res.sendFile(__dirname + '/public/js/chat.js');
// })
// app.get('/public/css/common.css', (req, res) => {
//   res.sendFile(__dirname + '/public/css/common.css');
// })
// app.listen(1314, () => {
//   // webrtc 
//   console.log('应用在1314端口上伺服')
// })
server.listen(1314, () => {
  console.log('server is listining 1314');
})
