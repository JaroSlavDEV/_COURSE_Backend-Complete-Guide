const os = require('os');

// Only for unix systems
// 1, 5, and 15 load average
// [ 2.11474609375, 2.64306640625, 2.30615234375 ]
console.log(os.loadavg());
