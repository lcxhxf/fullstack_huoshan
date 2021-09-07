const http = require('http'); //node http模块
// http 基于请求 响应的无状态协议
const fs = require('fs')
var server = http.createServer(function(req, res) {
    if (req.url == '/') { //请求对象 首页
        // res.writeHead(200, {'Content-type': 'text/html'})
        // res.write('<h1>Node.js</h1>')
        // res.write('<p>Hello World</p>')
        // res.write('<p>over</p>')
        fs.createReadStream('./index.html').pipe(res)
    } else if (req.url = '/abc') {
        res.end('abc')
    }
})
// 8080 是端口
server.listen('8080', function() {
    console.log('web server is listening on port 8080');
})
