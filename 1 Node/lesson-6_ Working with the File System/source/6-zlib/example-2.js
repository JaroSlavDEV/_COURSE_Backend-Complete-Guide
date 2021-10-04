const zlib = require('zlib');
const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
    const index = fs.createReadStream('./data/index.html');

    let acceptEncoding = request.headers['accept-encoding'];
    if (!acceptEncoding) {
        acceptEncoding = '';
    }

    if (/\bdeflate\b/.test(acceptEncoding)) {
        response.writeHead(200, { 'Content-Encoding': 'deflate' });

        index.pipe(zlib.createDeflate()).pipe(response);
    } else if (/\bgzip\b/.test(acceptEncoding)) {
        response.writeHead(200, { 'Content-Encoding': 'gzip' });

        index.pipe(zlib.createGzip()).pipe(response);
    } else {
        response.writeHead(200, {});

        index.pipe(response);
    }
}).listen(3030);
