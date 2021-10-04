const fs = require('fs');

// Вручную
const readFileCustom = filename =>
    new Promise((resolve, reject) => {
        fs.readFile(filename, (error, data) => {
            if (error) {
                return reject(error);
            }

            resolve(data);
        });
    });

readFileCustom(__filename).then(data => {
    console.log(data.toString());

    console.log('done');
});
