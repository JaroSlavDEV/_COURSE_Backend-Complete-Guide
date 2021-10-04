const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

const file = readFile('noFile.txt', { encoding: 'utf8' });

file.then(data => {
    console.log(data);
    debugger;
}).catch(error => {
    console.log(error.message);
    debugger; // hit only this one
});
