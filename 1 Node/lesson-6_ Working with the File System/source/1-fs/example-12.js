const fs = require('fs');

fs.access(__filename, fs.constants.F_OK | fs.constants.W_OK, error => {
    if (error) {
        console.error(
            `${__filename} ${
                error.code === 'ENOENT' ? 'does not exist' : 'is read-only'
            }`,
        );
    } else {
        console.log(`${__filename} exists, and it is writable`);
    }
});
