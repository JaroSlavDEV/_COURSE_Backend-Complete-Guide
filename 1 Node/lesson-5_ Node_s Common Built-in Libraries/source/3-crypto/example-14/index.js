const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', 'pa$$w0rd');

hmac.on('readable', () => {
    const data = hmac.read();
    if (data) {
        console.log(data.toString('hex'));
        // 0ecbbdfd41dd4f3337327070366b46ebcdf88bd6459de0f41ffcf40881603028
    }
});

hmac.write('Hello lectrum!');
hmac.end();
