// web server
// 返回聊天室的首页 
// socket 服务 on
// 加入房间
// 一对一聊天
const express = require('express');
const app = express();
// 内置 http服务， 由express 
const server = require('http').createServer(app);
// 实时通信， socket 协议在服务器端的封装
// 基于http服务启动 socket服务
const io = require('socket.io')(server);
io.on('connection', socket => {
  console.log('服务器连接成功');
  socket.on('message', msg=> {
      io.emit('message', {
          user: '系统',
          content: msg,
          createAt: new Date().toLocaleString()
      })
  })
})
app.get('/', (req, res) => {
  console.log(__dirname + '/index.html'); // 魔法变量 绝对路径
  //  res.send('hello world');
  res.sendFile(__dirname + '/index.html')
})
app.get('/index.js', (req, res) => {
  res.sendFile(__dirname + '/index.js')
})

server.listen(4000);
