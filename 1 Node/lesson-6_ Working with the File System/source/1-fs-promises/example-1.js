const fs = require('fs');

const readFile = (filename, options = {}) =>
    new Promise((resolve, reject) => {
        fs.readFile(filename, options, (error, file) => {
            if (error) reject(error);

            resolve(file);
        });
    });

readFile(__filename).then(data => {
    console.log(data);
});

readFile(__filename, { encoding: 'utf8' }).then(data => {
    console.log(data);
});

(async () => {
    const data = await readFile(__filename);

    console.log(data);
})();
