const fs = require('fs');
const file = fs.createWriteStream('./data/sample.txt');

file.write('hello, \n');
file.write('hello, \n');
file.write('hello, \n');
file.end('world!');
