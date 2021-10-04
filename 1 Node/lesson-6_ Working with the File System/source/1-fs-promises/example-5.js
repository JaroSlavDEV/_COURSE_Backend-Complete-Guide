const fs = require('fs').promises;

fs.readFile(__filename, { encoding: 'utf-8' })
    .then(data => {
        console.log(data);
    })
    .catch(er => {
        console.log(er);
    });
