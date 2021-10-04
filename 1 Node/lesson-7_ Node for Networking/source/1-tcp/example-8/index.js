const net = require('net');

const server = net.createServer();

server.on('connection', socket => {
    console.log('New client connected!');

    socket.write('Welcome a board!\n');

    socket.on('data', msg => {
        console.log(`From client: ${msg}`);

        server.getConnections((error, connections) => {
            socket.write(`${connections} users connected to our server\n`);
        });

        socket.write(`From server: ${msg}`);
    });

    socket.on('end', () => {
        console.log('Client is disconnected!');
    });
});

server.listen(8080, () => {
    const { address, family, port } = server.address();
    console.log(address, family);

    console.log(`TCP Server started on port ${port}!`);
});
