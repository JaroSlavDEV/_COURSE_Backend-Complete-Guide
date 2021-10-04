const fs = require('fs');
const path = require('path');

const fileStream = fs.createReadStream(path.join(__dirname, '/data/test.txt'));

fileStream.on('data', function() {
    console.log(this.bytesRead, 'bytes');
});
