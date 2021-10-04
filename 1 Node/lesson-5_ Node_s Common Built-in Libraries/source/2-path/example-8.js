const path = require('path');

console.log(
    path.join(
        '/Users/radist/',
        'Projects',
        '', // ignored
        ' ', // not ignored
        "/Backend/lesson-5 Node's Common Built-in Libraries/source/2-path",
        'example-8.js',
    ),
);
