var http = require('http');

function compute() {
    // много кода
    // много кода
    // много кода
    console.log(new Date());

    compute();
}

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
}).listen(5000, '127.0.0.1');

compute();
