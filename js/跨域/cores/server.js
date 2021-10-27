const http = require('http')

let server = http.createServer((req, res) => {
    let resData = {}    
    let postData = []
    req.on('data', chunk => {
        postData.push(chunk)
    })
    req.on('end', () => {
        resData.postData = Buffer.concat(postData).toString()
        res.end(JSON.stringify(resData))
    })
})

server.listen(3000, () => {
    console.log('服务已启动');
})