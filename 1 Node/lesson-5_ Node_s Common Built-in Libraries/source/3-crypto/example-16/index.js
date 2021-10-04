const crypto = require('crypto');

const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
});

// console.log(privateKey);
// console.log(publicKey);

// console.log(privateKey.export({ type: 'pkcs1', format: 'pem' }));
// console.log(publicKey.export({ type: 'pkcs1', format: 'pem' }));

// Client 1
const sign = crypto.createSign('SHA256');
sign.update('Hello Lectrum!');
sign.end();

const signature = sign.sign(privateKey);
// Данные
// Подпись

// Client 2
const verify = crypto.createVerify('SHA256');
verify.update('Hello Lectrum!');
verify.end();

console.log(verify.verify(publicKey, signature)); // true
