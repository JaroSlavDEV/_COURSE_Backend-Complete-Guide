const http = require('http');

http.get('http://example.com', response => {
    response.on('data', chunk => {
        console.log(chunk.toString());
    });
});
