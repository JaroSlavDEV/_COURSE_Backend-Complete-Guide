// This example should be run with help of node rather than jest
const mock = require('mock-require');

mock('fs', {});

const fs1 = require('fs');

console.log(fs1); // mocked

mock.stop('fs');

const fs2 = require('fs');

console.log(fs2); // not mocked

console.log(fs1 === fs2); // false
