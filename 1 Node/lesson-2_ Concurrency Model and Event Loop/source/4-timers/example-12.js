const http = require('http');

const server = new http.createServer((req, res) => {});

server.listen(3030, () => {
    console.log('Server listen on port 3030');
});

setTimeout(() => {
    server.close(() => process.exit());
}, 3000);

setInterval(() => {
    console.log(process.memoryUsage());
}, 1000);
