const fs = require('fs');
const path = require('path');

const dirname = path.join(__dirname, 'files');
const currentFiles = fs.readdirSync(dirname);

const logWithTime = message => {
    console.log(`${new Date().toUTCString()}: ${message}`);
};

const watcher = fs
    .watch(dirname, (eventType, filename) => {
        console.log(eventType);

        if (eventType === 'rename') {
            const index = currentFiles.indexOf(filename);

            if (index >= 0) {
                currentFiles.splice(index, 1);
                logWithTime(`${filename} was removed`);
                return;
            }

            currentFiles.push(filename);
            logWithTime(`${filename} was added`);
            return;
        }

        logWithTime(`${filename} was changed`);
    })
    .on('change', () => {
        console.log('----> change');
    })
    .on('close', () => {
        console.log('watch closed!');
    });

setTimeout(() => {
    watcher.close();
}, 15000);
