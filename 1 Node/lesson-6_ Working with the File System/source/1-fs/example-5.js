const fs = require('fs');

// NO-OP
fs.readFile('./file', { encoding: 'utf-8' }, (error, data) => {
    console.log(data); // undefined
});
