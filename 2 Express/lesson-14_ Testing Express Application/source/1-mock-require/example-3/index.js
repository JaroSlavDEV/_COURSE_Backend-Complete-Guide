// This example should be run with help of node rather than jest
const mock = require('mock-require');

mock('fs', 'path');

// should be imported (required) after the mock function call
const fs = require('fs');
const path = require('path');

console.log(fs === path); // true
