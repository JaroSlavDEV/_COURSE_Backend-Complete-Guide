const fs = require('fs').promises;

fs.readFile('file', { encoding: 'utf-8' })
    .then(data => {
        console.log(data);
    })
    .catch(({ message }) => {
        console.log(message);
    });
