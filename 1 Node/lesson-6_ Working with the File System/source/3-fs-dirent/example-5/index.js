const fs = require('fs');
const path = require('path');

const options = {
    withFileTypes: true
};

fs.readdir('.', options, (error, files) => {
    if (error) throw error;
    const directories = [];
    const filesArray = [];

    files.forEach(item => {
        if (item.isDirectory()) {
            directories.push(item.name);
        }
    });

    directories.forEach(directory => {
        fs.readdir(path.resolve(directory), options, (error, file) => {
            if (error) throw error;

            filesArray.push(...file);

            const data = filesArray.filter(item => item.isFile());

            console.log(data);
        });
    });
});
