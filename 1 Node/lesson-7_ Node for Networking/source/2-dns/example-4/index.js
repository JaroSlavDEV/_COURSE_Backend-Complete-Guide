const dns = require('dns');

dns.resolveMx('google.com', (error, mxRecords) => {
    console.log(mxRecords);
});
