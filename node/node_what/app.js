const http = require('http');
const url = require('url');

// web 伺服
// 给用户分配资源
// 用户req req.url
// 事件
http
    .createServer((req,res) => {
        // console.log(url.parse(req.url).pathname);
        const { pathname } = url.parse(req.url);
        let str = 'hello'
        if (pathname == '/fe') {
            str += ' fe'
        } else if (pathname == '/backend') {
            str += ' backend'
        }
        res.end(str)
    })
    .listen(3100, () => {
    console.log('app start');
})