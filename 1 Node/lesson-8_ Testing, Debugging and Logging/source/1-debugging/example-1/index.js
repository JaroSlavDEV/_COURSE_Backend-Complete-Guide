const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

const file = readFile(__filename, { encoding: 'utf8' });

file.then(data => {
    console.log(data);
}).catch(error => {
    console.error(error.message);
});
