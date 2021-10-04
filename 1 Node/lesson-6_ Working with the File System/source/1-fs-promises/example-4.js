const fs = require('fs').promises;

fs.readFile(__filename)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
