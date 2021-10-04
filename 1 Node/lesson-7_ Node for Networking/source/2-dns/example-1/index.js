const dns = require('dns');

dns.lookup('google.com', (error, address) => {
    console.log(address);
});
