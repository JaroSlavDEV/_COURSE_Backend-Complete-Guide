const path = require('path');

console.log(path.delimiter);
console.log(process.env.PATH);

// Use case
console.log(process.env.PATH.split(path.delimiter));
