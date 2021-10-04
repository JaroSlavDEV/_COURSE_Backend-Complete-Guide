const fs = require('fs');

fs.stat(__filename, (error, stats) => {
    if (error) throw error;

    if (stats.size > 100) {
        fs.copyFile(__filename, `${__filename}.big`, error => {
            if (error) throw error;
        });
    } else {
        fs.copyFile(__filename, `${__filename}.small`, error => {
            if (error) throw error;
        });
    }
});
