const fs = require('fs');
const path = require('path');

const fileStream = fs.createReadStream(path.join(__dirname, '/data/test.txt'));

console.log(
    `highWaterMark for fs Readable Stream: ${fileStream._readableState.highWaterMark}`,
);

fileStream.on('data', chunk => {
    // console.log(chunk.toString());
    console.log('-----------------------> CHUNK <-----------------------');
});
