const fs = require('fs');
const server = require('http').createServer();

server.on('request', (request, response) => {
    const readableStream = fs.createReadStream('./data/big.txt');
    console.log(readableStream.readableHighWaterMark);
    readableStream.pipe(response);
    // 'источник'.pipe('потребитель')
});

server.listen(3030);
