const dns = require('dns');

dns.resolve6('google.com', (error, address) => {
    console.log(address);
});
