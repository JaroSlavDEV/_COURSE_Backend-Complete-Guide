const net = require('net');

const server = net.createServer();
const PORT = process.env.PORT || 8080;

server.on('connection', socket => {
    socket.setEncoding('utf-8');
    console.log('New client connected!');

    socket.on('data', msg => {
        // Need to add breakpoint
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
