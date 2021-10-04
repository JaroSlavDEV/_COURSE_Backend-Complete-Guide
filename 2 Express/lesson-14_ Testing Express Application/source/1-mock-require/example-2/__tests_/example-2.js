const mock = require('mock-require');
const myFs = require('../');

mock('fs', myFs); // myFs can be object or function

// should be imported (required) after the mock function call
const fs = require('fs');

console.log(fs);

test.only('should read file content', () => {
    const file = fs.readFile('some_file.js', (err, file) => {
        console.log(file);
    });

    expect(file).toBe('file content async');
});
