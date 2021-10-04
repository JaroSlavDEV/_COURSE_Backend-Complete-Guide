const crypto = require('crypto');
const fs = require('fs');
const algorithm = 'aes192';
const password = '1qaZxsw2@3edcVfr4';

const decipher = crypto.createDecipher(algorithm, password);

const input = fs.createReadStream('./example-10/countries.enc');
const output = fs.createWriteStream('./example-10/countries.json');

input.pipe(decipher).pipe(output);
