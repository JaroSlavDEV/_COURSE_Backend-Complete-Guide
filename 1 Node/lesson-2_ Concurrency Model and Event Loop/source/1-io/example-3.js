const fs = require('fs');

console.log('start');

let data;

fs.readFile('./example-3.js', (error, file) => {
    if (error) throw error;
    data = file;
});

console.log('file -->', data);

console.log('end');

// callback(null, 'file');
// callback(undefined, 'file'); no op
// callback(void 0, 'file'); no op
// callback('Error'); // file → undefined
