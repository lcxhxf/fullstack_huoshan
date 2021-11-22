var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(302, {
        'Location': 'http://itbulu.com'
    })
    console.log(res._header);
    res.end();
})
 server.listen(8888)