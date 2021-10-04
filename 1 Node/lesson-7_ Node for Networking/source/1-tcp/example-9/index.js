const net = require('net');

const server = net.createServer();
const PORT = process.env.PORT || 8080;

server.on('connection', socket => {
    console.log('New client connected!');
});

server.on('error', error => {
    if (error.code === 'EADDRINUSE') {
        console.log('Address in use, retrying...');
        setTimeout(() => {
            server.close();
            server.listen(PORT);
        }, 1000);
    }
});

server.on('listening', () => {
    const { port } = server.address();
    console.log(`TCP Server started on port ${port}!`);
});

server.listen(PORT);
