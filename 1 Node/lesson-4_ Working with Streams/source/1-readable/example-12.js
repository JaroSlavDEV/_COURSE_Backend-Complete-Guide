const fs = require('fs');
const server = require('http').createServer();

// Проблема — потребялет много памяти
server.on('request', (request, response) => {
    fs.readFile('./data/big.txt', (err, data) => {
        if (err) {
            throw err;
        }

        response.end(data);
    });
});

server.listen(3030);
