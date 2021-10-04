const http = require('http');

const server = new http.createServer((req, res) => {});

server.listen(3030, () => {
    console.log('Server listen on port 3030');
});

const timer = setInterval(() => {
    console.log(process.memoryUsage());
}, 1000);

timer.unref();

if (true) {
    timer.ref();
}

setTimeout(() => {
    server.close();
}, 3000);
