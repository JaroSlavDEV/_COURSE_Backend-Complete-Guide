const path = require('path');

const pathObject = {
    root: '/ignored/', // ignored because of dir
    // dir:
    //     "/Users/radist/Projects/Backend/lesson-5 Node's Common Built-in Libraries/source/2-path",
    base: 'example-6.js',
};

console.log(path.format(pathObject));
