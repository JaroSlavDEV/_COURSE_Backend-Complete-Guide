const net = require('net');
const dg = require('debug');
const winston = require('winston');

const server = net.createServer();
const PORT = process.env.PORT || 8080;

const debugData = dg('server:data');
const debugListening = dg('server:listening');
const debugConnect = dg('server:connection:connect');
const debugDisconnect = dg('server:connection:disconnect');

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.simple(),
    transports: [
        new winston.transports.File({
            filename: 'logs/error.log',
            level: 'error'
        }),
        new winston.transports.File({ filename: 'logs/combined.log' })
    ]
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(
        new winston.transports.Console({
            format: winston.format.simple()
        })
    );
}

const delay = timeout =>
    new Promise(resolve =>
        setTimeout(() => {
            resolve();
        }, timeout)
    );

server.on('connection', socket => {
    debugConnect('New client connected!');

    socket.on('data', async msg => {
        debugData(msg.toString());
        await delay(1000);
        logger.info(msg.toString());
        socket.write(`From server: ${msg}`);
    });

    socket.on('end', () => {
        logger.error('Client is disconnected!');
        debugDisconnect('Client is disconnected!');
    });
});

server.on('listening', () => {
    const { port } = server.address();
    logger.debug(`TCP Server started on port ${port}!`);
    debugListening(`TCP Server started on port ${port}!`);
});

server.listen(PORT);
