const fs = require('fs');
const path = require('path');

const options = {
    withFileTypes: true,
};
const filesArray = [];

fs.readdir('.', options, (error, files) => {
    if (error) throw error;
    const directories = [];

    files.forEach(item => {
        if (item.isDirectory()) {
            directories.push(item.name);
        }
    });

    directories.forEach(directory => {
        fs.readdir(path.resolve(directory), (error, files) => {
            if (error) throw error;

            filesArray.push(...files);
        });
    });
});

setTimeout(() => {
    console.log(filesArray);
}, 3000);
