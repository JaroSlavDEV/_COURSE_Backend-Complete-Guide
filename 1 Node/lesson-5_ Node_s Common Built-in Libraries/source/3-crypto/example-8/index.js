const crypto = require('crypto');
const fs = require('fs');
const algorithm = 'aes192';
const password = '1qaZxsw2@3edcVfr4';

const key = crypto.scryptSync(password, 'salt', 24);

const buf = Buffer.alloc(16);
const iv = crypto.randomFillSync(buf, 10);

const cipher = crypto.createCipheriv(algorithm, key, iv);

let encrypted = cipher.update(
    JSON.stringify({ name: 'John', age: 27, scores: [1, 2, 3, 4, 5] }),
    'utf8',
    'hex',
);
encrypted += cipher.final('hex');

console.log(encrypted);
