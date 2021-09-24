// io 操作拿出来
module.exports = (server) => {
    const io = require('socket.io')(server);
    io.on('connection', socket => {
        console.log('服务器连接成功');
        // socket.on('message', msg => {
        //     io.emit('mes sage', {
        //         user: '系统',
        //         content: msg,
        //         createAt: new Date().toLocaleString()
        //     })
        // })
    })
}