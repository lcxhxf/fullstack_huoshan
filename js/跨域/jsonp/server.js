const http = require('http')
const querystring = require('querystring')

let server = http.createServer((req,res) => {
    console.log(req.url);
    const url = req.url;
    const query = querystring.parse(url.split('?'[1]))
    console.log(query);

})

server.listen(3000, () => {
    console.log('服务已经启动！');
})