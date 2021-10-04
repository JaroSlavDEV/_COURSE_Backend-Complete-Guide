// node --inspect-brk example-2
const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

const file = readFile(__filename, { encoding: 'utf8' });

file.then(data => {
    console.log(data);
    debugger; // hit only this one
}).catch(error => {
    console.log(error.message);
    debugger;
});
