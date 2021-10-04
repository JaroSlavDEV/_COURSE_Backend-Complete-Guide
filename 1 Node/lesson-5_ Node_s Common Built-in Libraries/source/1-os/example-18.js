const os = require('os');
const cluster = require('cluster');
const http = require('http');

const cpus = os.cpus().length;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);

        cluster.fork();
    });
} else {
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end(`hello → ${process.pid}\n`);
    }).listen(8000);

    console.log(`Worker ${process.pid} started`);
}
