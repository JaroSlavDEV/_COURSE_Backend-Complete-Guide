const dgram = require('dgram');
const PORT = process.env.PORT || 3333;
const HOST = process.env.HOST || '127.0.0.1';

// Server
// udp4
// udp6
const server = dgram.createSocket('udp4');

server.on('listening', () => {
    console.log(`UDP server listening on port ${PORT}`);
});

server.on('message', (message, remoteInfo) => {
    console.log(`${remoteInfo.address}:${remoteInfo.port} - ${message}`);
});

server.bind(PORT, HOST);
