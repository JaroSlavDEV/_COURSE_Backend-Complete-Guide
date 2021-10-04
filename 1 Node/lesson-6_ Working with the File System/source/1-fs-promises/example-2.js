const fs = require('fs');
const { promisify } = require('util'); // Node.js 8+

const readFile = promisify(fs.readFile);

readFile(__filename).then(data => {
    console.log(data);
});

readFile(__filename, { encoding: 'utf8' }).then(data => {
    console.log(data);
});

(async () => {
    const data = await readFile(__filename, { encoding: 'utf8' });

    console.log(data);
})();
