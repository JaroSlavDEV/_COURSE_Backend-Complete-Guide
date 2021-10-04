const path = require('path');

// Full path to a file
const fullPath =
    '/Users/radist/Projects/Backend/lesson-5 Node\'s Common Built-in Libraries/source/2-path/example-1.js';

console.log(path.basename(fullPath)); // example-1.js
console.log(path.basename(fullPath, '.js')); // example-1

// __filename
console.log(path.basename(__filename)); // example-1.js
console.log(path.basename(__filename, '.js')); // example-1
