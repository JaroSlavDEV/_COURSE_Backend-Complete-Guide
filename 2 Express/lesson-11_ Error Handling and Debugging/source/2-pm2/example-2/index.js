const express = require('express');
const numCPUs = require('os').cpus().length;
const cluster = require('cluster');

const port = process.env.PORT || 3000;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    const app = express();

    app.get('/', async (req, res) => {
        res.status(200).json({ pid: process.pid });
    });

    app.get('/error', (req, res) => {
        process.exit(1);
        res.sendStatus(200);
    });

    app.listen(port);

    console.log(`Worker ${process.pid} started`);
}
