const crypto = require('crypto');
const fs = require('fs');
const algorithm = 'aes192';
const password = '1qaZxsw2@3edcVfr4';
const cipher = crypto.createCipher(algorithm, password);

const input = fs.createReadStream('./example-5/countries.json');
const output = fs.createWriteStream('./example-5/countries.enc');

input.pipe(cipher).pipe(output);
