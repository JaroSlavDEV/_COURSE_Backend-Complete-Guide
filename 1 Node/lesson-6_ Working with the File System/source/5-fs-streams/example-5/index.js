const fs = require('fs');
const path = require('path');

const fileStream = fs.createReadStream(path.join(__dirname, '/data/test.txt'));
const fileWriteStream = fs.createWriteStream(
    path.join(__dirname, '/data/test.txt.copy')
);

fileStream.pipe(fileWriteStream);
