const dns = require('dns');

dns.resolve('airbnb.com', 'A', (error, address) => {
    console.log(address[0]);

    dns.reverse(address[0], (error, hostNames) => {
        console.log(hostNames);
    });
});
