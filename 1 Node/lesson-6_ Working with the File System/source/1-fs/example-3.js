const fs = require('fs');

const callback = (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
};

fs.readFile(__filename, { encoding: 'utf-8' }, callback);
