const fs = require('fs');
const path = require('path');

const fileStream = fs.createReadStream(path.join(__dirname, '/data/test.txt'));
const fileWriteStream = fs.createWriteStream(
    path.join(__dirname, '/data/test.txt.copy')
);

fileWriteStream.on('open', () => {
    console.log('file opened');
});

fileWriteStream.on('ready', () => {
    console.log('stream is ready to be used');
});

fileWriteStream.on('close', () => {
    console.log('file closed');
});

fileStream.pipe(fileWriteStream);
