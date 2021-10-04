const dns = require('dns');

dns.resolve4('google.com', (error, address) => {
    console.log(address);
});

dns.resolve6('google.com', (error, address) => {
    console.log(address);
});

// 'A' IPv4
dns.resolve('google.com', 'A', (error, address) => {
    console.log(address);
});

// 'AAAA' IPv6
dns.resolve('google.com', 'AAAA', (error, address) => {
    console.log(address);
});
