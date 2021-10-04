const http = require('http');

const server = http.createServer((req, res) => {});

server.listen(3030, () => {
    console.log('Server listen on port 3030');
});

setTimeout(() => {
    server.close();
}, 3000);
