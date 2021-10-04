const mock = require('mock-require');

mock('fs', {
    readFile: () => 'file content async'.toLocaleUpperCase(),
    writeFileSync: () => 'file content sync',
});

// should be imported (required) after the mock function call
const fs = require('fs');

test('should read file content', () => {
    const fileName = '../example-1.js';

    const file = fs.readFile(fileName, (err, file) => {
        console.log(file);
    });

    expect(file).toBe('file content async'.toLocaleUpperCase());
});
