const { Server } = require("socket.io");
const io = require("../../io");

const socket = io(); //socket.min.js
// 后端提供了socket 服务 前端连接一下这个服务
socket.on('connect', () => {
    console.log('客户端连接成功');
    socket.emit('online', query.sender)(server);
    io.on('connection', socket => {
        socket.on('online', username => {
            console.log(`${username}上线了`,socket.id);
        })
    })
})