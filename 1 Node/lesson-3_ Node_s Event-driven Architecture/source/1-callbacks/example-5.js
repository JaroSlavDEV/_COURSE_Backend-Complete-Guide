const fs = require('fs');
const { promisify } = require('util'); // Node.js 8+

// При помощи утилиты promisisfy
const readFile = promisify(fs.readFile);

readFile(__filename).then(data => {
    console.log(data.toString());

    console.log('done');
});
