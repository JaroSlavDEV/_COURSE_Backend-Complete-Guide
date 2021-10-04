const net = require('net');
const dg = require('debug');
const rp = require('request-promise');

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

const log = async msg => {
    try {
        await rp('http://127.0.0.1:12201/gelf', {
            method: 'POST',
            body: {
                short_message: msg,
                host: 'school',
            },
            json: true,
        });
    } catch (error) {
        console.log(error);
    }
};

server.on('connection', socket => {
    debugConnect('New client connected!');

    socket.on('data', async msg => {
        debugData(msg.toString());
        await delay(1000);
        await log(msg.toString());
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
