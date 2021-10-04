const crypto = require('crypto');
const algorithm = 'aes192';
const password = '1qaZxsw2@3edcVfr4';
const cipher = crypto.createCipher(algorithm, password);

let encrypted = cipher.update(
    JSON.stringify([{ name: 'John', age: 27, scores: [1, 2, 3, 4, 5] }]),
    'utf8',
    'hex'
);
encrypted += cipher.final('hex');

console.log(encrypted);
