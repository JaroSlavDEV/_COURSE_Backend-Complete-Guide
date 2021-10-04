// This example should be run with help of node rather than jest
const mock = require('mock-require');

mock('fs', {});
mock('path', {});

const fs1 = require('fs');
const path1 = require('path');

// mock.stop('fs');
// mock.stop('path');
mock.stopAll();

const fs2 = require('fs');
const path2 = require('path');

console.log(fs1 === fs2); // false
console.log(path1 === path2); // false
