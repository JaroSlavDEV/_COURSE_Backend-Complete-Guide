const fs = require('fs');

fs.copyFile('./data/append.txt', './data/append.txt.copy', error => {
    if (error) throw error;
    console.log('append.txt was copied');
});
