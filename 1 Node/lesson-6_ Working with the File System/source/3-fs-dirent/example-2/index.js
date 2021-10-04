const fs = require('fs');

const options = {
    withFileTypes: true,
};

// For unix /dev
fs.readdir('/dev', options, (error, files) => {
    if (error) throw error;

    // Array of Dirent objects
    console.log(files);

    files.forEach(item => {
        if (item.isBlockDevice()) {
            console.log(`${item.name} is a block device`);
        }
    });
});
