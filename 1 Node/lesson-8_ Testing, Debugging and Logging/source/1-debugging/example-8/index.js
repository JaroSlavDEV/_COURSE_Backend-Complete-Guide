const dg = require('debug');

const debugLog = dg('marker');

debugLog('Message 1');

console.log('Message 2');
// if (process.env.NODE_ENV === 'development') {
//     console.log('Message 2');
// }

debugLog('Message 3');
