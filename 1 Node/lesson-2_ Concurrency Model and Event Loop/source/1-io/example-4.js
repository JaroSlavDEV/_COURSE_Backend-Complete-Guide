const fs = require('fs');

console.log('start');

const file = fs.readFileSync('./wrong-file.js');

console.log('end');
