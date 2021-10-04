const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

readFile('file')
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error.message); // ENOENT: no such file or directory, open 'file'
    });

(async () => {
    try {
        const data = await readFile('file', { encoding: 'utf8' });

        console.log(data);
    } catch (error) {
        console.error(error.message); // ENOENT: no such file or directory, open 'file
    }
})();
