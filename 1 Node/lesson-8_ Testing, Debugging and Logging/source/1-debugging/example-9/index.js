const dg = require('debug');

const debugLog1 = dg('marker:1');
const debugLog2 = dg('marker:2');

debugLog1('Message 1');

debugLog2('Message 2');
