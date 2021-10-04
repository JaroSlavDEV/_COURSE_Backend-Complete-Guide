const net = require('net');

const server = net.createServer();

server.on('connection', socket => {
    socket.setEncoding('utf8');

    console.log('New client connected!');

    socket.write('Welcome a board!\n');

    socket.on('data', msg => {
        console.log(`From client: ${msg}`);

        socket.write(`From server: ${msg}`);
    });
});

server.listen(8080, () => {
    console.log('TCP Server started!');
});
