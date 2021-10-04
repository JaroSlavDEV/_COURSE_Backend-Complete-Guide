const fs = require('fs');
const server = require('http').createServer();

server.on('request', (request, response) => {
    const rs = fs.createReadStream('./data/big.txt', { highWaterMark: 16384 });
    console.log(rs.readableHighWaterMark);
    rs.pipe(response);
});

server.listen(3030);
