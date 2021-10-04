const net = require('net');
const timestamp = require('./helper');

let id = 0;
let clients = [];

const server = net.createServer();
const PORT = process.env.PORT || 8080;

server.on('connection', socket => {
    socket.id = id++;
    console.log('New client connected!');

    socket.write('Please enter your name: ');

    socket.on('data', msg => {
        if (!clients[socket.id]) {
            socket.name = msg.toString().trim();
            socket.write(`Welcome a board ${socket.name}!\n`);
            clients[socket.id] = socket;
            return;
        }
        clients.forEach((clientSocket, index) => {
            if (socket.id === index) return;
            clientSocket.write(`${socket.name} ${timestamp()}: `);
            clientSocket.write(msg);
        });
    });

    socket.on('end', () => {
        clients = clients.filter((clientSocket, index) => index !== socket.id);
        console.log('Client is disconnected!');
    });
});

server.on('listening', () => {
    const { port } = server.address();
    console.log(`TCP Server started on port ${port}!`);
});

server.listen(PORT);
