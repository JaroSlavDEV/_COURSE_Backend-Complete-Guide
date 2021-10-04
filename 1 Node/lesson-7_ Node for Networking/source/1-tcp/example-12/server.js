const net = require('net');
const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream');

const server = net.createServer();
const PORT = process.env.PORT || 8080;

server.on('connection', socket => {
    console.log('New client connected!');

    socket.on('data', msg => {
        const rs = fs.createReadStream(
            path.join('example-12/data', 'comments.csv'),
        );
        // rs.pipe(socket);
        pipeline(rs, socket, error => {
            if (error) {
                console.error(error);
            }
        });
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
