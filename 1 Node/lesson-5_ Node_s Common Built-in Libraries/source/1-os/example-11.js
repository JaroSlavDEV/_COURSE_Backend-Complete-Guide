const os = require('os');

console.log(os.networkInterfaces());

// {
//     address: 'fe40::1412:4636:4138:f5a1',
//     netmask: 'ffff:ffff:ffff:ffff::',
//     family: 'IPv6',
//     mac: '62:5b:35:91:38:46',
//     scopeid: 13,
//     internal: false,
//     cidr: 'fe40::1412:4636:4138:f5a1/64'
// }
