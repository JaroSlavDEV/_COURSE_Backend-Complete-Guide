const net = require('net');

const server = net.createServer();

server.on('connection', socket => {
    console.log('New client connected!');

    socket.write('Welcome a board!\n');

    socket.on('data', msg => {
        console.log(msg);
        console.log(msg.toString());

        socket.write(`From server: ${msg.toString().toUpperCase()}`);
        // socket.write(msg);
    });
});

server.listen(8080, () => {
    console.log('TCP Server started!');
});
