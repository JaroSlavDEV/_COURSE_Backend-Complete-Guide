const crypto = require('crypto');
const fs = require('fs');

const hmac = crypto.createHmac('sha256', 'pa$$w0rd');

const input = fs.createReadStream('example-15/index.js');
input.pipe(hmac).pipe(process.stdout);
