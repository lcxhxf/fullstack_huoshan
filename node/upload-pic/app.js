const http = require('http');
const fs = require('fs')

http
    .createServer((req, res) => {
        if (req.url == '/') {
            fs.createReadStream('./pic.html').pipe(res);
        }
    })
    .listen(1314)