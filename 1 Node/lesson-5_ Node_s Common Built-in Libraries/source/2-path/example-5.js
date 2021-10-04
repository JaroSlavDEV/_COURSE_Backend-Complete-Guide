const path = require('path');

// Full path to a file
const fullPath =
    "/Users/radist/Projects/Backend/lesson-5 Node's Common Built-in Libraries/source/2-path/example-5.js";

console.log(path.extname(fullPath)); // .js
// console.log(path.extname(fullPath) === '.js'); // true
// console.log(path.extname(fullPath).includes('js')); // true
