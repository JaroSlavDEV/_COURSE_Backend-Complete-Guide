const fs = require('fs');

// I/O
fs.readFile(__filename, () => {
    setTimeout(() => {
        console.log('first timeout'); // always second
    }, 0);

    setImmediate(() => {
        console.log('immediate'); // always first
    });

    console.log('Sync code');

    setTimeout(() => {
        console.log('second timeout'); // always third
    }, 0);
});
