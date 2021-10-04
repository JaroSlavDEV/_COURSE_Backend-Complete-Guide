const crypto = require('crypto');
const algorithm = 'aes192';
const password = '1qaZxsw2@3edcVfr4';
const cipher = crypto.createCipher(algorithm, password);

// Cipher {
//     _handle: {},
//     _decoder: null,
//     _options: undefined,
//     writable: true,
//     readable: true }
console.log(cipher); // instance of Cipher

let encrypted = '';

cipher.on('data', chunk => {
    encrypted += chunk.toString('hex'); // base64
});

cipher.on('end', () => {
    console.log(encrypted);
});

cipher.write(
    JSON.stringify({
        name: 'John',
        age: 27,
        scores: [1, 2, 3, 4, 5],
        sex: 'male',
    }),
);

cipher.end();
