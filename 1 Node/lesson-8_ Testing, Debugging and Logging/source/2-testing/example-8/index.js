const fs = require('fs');

const getData = () =>
    new Promise((resolve, reject) => {
        fs.readFile('test.js', (error, data) => {
            if (error) {
                reject(error);
            }

            fs.access('test.js', fs.constants.F_OK, () => {});
            resolve(data);
        });
    });

module.exports = getData;
