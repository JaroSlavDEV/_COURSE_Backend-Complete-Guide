const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '/data/test.txt');

const fileStream = fs.createReadStream(filePath);

console.log(fileStream.path);
console.log(filePath);
