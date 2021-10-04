const net = require('net');
const winston = require('winston');
const { Loggly } = require('winston-loggly-bulk');

const server = net.createServer();
const PORT = process.env.PORT || 8080;

const delay = timeout =>
    new Promise(resolve =>
        setTimeout(() => {
            resolve();
        }, timeout),
    );

winston.add(
    new Loggly({
        token: 'd309b52e-4b99-4e2e-886c-62818b556dd6',
        subdomain: 'lectrum',
        tags: ['Winston-NodeJS'],
        json: true,
    }),
);

server.on('connection', socket => {
    socket.on('data', async msg => {
        await delay(1000);
        winston.log('info', msg.toString());
        socket.write(`From server: ${msg}`);
    });

    socket.on('end', () => {
        console.log('Client is disconnected!');
    });
});

server.on('listening', () => {
    const { port } = server.address();
    console.log(`TCP Server started on port ${port}!`);
});

server.listen(PORT);
