const dns = require('dns');

dns.resolveNs('google.com', (error, nsRecords) => {
    console.log(nsRecords);
});
