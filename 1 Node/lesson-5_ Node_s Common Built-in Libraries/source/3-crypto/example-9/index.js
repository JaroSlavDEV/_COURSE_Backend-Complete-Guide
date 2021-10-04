const crypto = require('crypto');
const fs = require('fs');
const algorithm = 'aes192';
const password = '1qaZxsw2@3edcVfr4';

// crypto.createCipher
const decipher = crypto.createDecipher(algorithm, password);

let decrypted = '';
decipher.on('data', chunk => {
    decrypted += chunk.toString('utf8');
});

decipher.on('end', () => {
    console.log(decrypted); // {"name":"John","age":27,"scores":[1,2,3,4,5]}
    console.log(JSON.parse(decrypted));
});

let encrypted =
    '2dfcf91c4754a71d7063fe9436abfb05b86aba4ace8156334613e878b6e0bdcad677deeae40f086828832399a9407d61';
decipher.write(encrypted, 'hex');
decipher.end();

// Error: error:0606506D:digital envelope routines:EVP_DecryptFinal_ex:wrong final block length
// decipher.write(encrypted, 'base64');
// decipher.end();
