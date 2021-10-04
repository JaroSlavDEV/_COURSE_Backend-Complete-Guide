console.log('1. index file was connected');

console.log(global.a); // undefined

require('./source');

console.log(global.a); // 1
