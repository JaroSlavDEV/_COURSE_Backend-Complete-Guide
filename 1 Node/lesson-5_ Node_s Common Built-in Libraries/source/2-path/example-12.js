const path = require('path');

const fromPath =
    "/Users/radist/Projects/Backend/lesson-5 Node's Common Built-in Libraries/source/2-path/example-11.js";
const toPath =
    "/Users/radist/Projects/Backend/lesson-5 Node's Common Built-in Libraries/source/2-path/example-12.js";

console.log(path.relative(fromPath, toPath));
