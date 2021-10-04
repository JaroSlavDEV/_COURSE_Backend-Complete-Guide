const crypto = require('crypto');
const sign = crypto.createSign('RSA-SHA256');

sign.update('We are very happy to learn Node.js!');

const private_key = `-----BEGIN EC PRIVATE KEY-----
MHcCAQEEIOztZ5+tQLK1Uj/JW8TnsBqPD/NqEaopbHARr5dHx9kyoAoGCCqGSM49
AwEHoUQDQgAE1o00qrssr2SWw7048zHtCMh1La+dkGZRIm5xNpH6B83e+5l3w5JC
qh9GfpL03oGO/uXwqRnufMIrHBh2nqHNNQ==
-----END EC PRIVATE KEY-----`;

console.log(sign.sign(private_key).toString('hex'));

// 1. 'We are very happy to learn Node.js!'
// 2. 3045022051e9ac8c213b6db6eb5fd058d449d47502e0b6b9e3b9522ba4176cb02a790056022100c4bdd52e16a5a13ce3dbc6d98aeeb465c20bca10b813d96fb65f2fac6bfb2db9
