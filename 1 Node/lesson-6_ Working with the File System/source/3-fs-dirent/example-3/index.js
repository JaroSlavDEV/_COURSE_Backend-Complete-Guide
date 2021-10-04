const fs = require('fs');

const options = {
    withFileTypes: true
};

// For unix /dev
fs.readdir('/dev', options, (error, files) => {
    if (error) throw error;

    files.forEach(item => {
        if (item.isCharacterDevice()) {
            console.log(`${item.name} is a character device`);
        }
    });
});
