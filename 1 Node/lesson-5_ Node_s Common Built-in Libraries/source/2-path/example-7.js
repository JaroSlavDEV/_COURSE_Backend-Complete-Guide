const path = require('path');

console.log(
    path.isAbsolute(
        "/Users/radist/Projects/Backend/lesson-5 Node's Common Built-in Libraries/source/2-path/example-7.js",
    ),
); // true

console.log(path.isAbsolute('./example-7.js')); // false
