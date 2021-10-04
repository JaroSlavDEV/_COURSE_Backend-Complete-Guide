const fs = require('fs');

console.log('start');

const file = fs.readFileSync('./example-1.js');

// blocks here until file is read read
console.log(file); // Buffer

console.log(file.toString()); // utf-8

console.log('end');
