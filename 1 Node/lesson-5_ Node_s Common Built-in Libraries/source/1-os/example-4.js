const os = require('os');

// For the 10.x LTS
console.log(os.cpus());
console.log(os.cpus().length); // 8

// {
//     model: 'Intel(R) Core(TM) i7-4770HQ CPU @ 2.20GHz', // cpu model
//     speed: 2200, // speed in MHz
//     times: {
//         user: 75695860,
//         nice: 0, // cpu priority tasks
//         sys: 60810480,
//         idle: 384948390,
//         irq: 0 // interrupt request
//     }
// }
