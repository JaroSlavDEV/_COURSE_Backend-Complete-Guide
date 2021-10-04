const crypto = require('crypto');
const fs = require('fs');
const algorithm = 'aes192';
const password = '1qaZxsw2@3edcVfr4';

const decipher = crypto.createDecipher(algorithm, password);
const encrypted =
    '2dfcf91c4754a71d7063fe9436abfb05b86aba4ace8156334613e878b6e0bdcad677deeae40f086828832399a9407d61';

let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);
console.log(JSON.parse(decrypted));
