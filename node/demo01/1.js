const http = require('http');

// const hostname = '127.0.0.1';
// const port = 8888

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end("Hello,i'am luochao\n");
    const url = new URL(request.url,`http://${request.headers.host}`)
    console.log(url);
}).listen(8888)

console.log('Server running at http://127.0.0.1:8888/');