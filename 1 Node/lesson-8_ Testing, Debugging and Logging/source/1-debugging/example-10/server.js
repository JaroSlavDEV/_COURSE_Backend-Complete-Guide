const net = require('net');
const dg = require('debug');

const server = net.createServer();
const PORT = process.env.PORT || 8080;

const debugData = dg('server:data');
const debugListening = dg('server:listening');
const debugConnect = dg('server:connection:connect');
const debugDisconnect = dg('server:connection:disconnect');

const delay = timeout =>
    new Promise(resolve =>
        setTimeout(() => {
            resolve();
        }, timeout),
    );

server.on('connection', socket => {
    debugConnect('New client connected!');

    socket.on('data', async msg => {
        debugData(msg.toString());
        await delay(2000);
        socket.write(`From server: ${msg}`);
    });

    socket.on('end', () => {
        debugDisconnect('Client is disconnected!');
    });
});

server.on('listening', () => {
    const { port } = server.address();
    debugListening(`TCP Server started on port ${port}!`);
});

server.listen(PORT);
