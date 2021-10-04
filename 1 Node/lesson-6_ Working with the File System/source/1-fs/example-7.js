const fs = require('fs');

const path = './data';
const source = 'index.html';
const destination = 'page.html';

fs.rename(`${path}/${source}`, `${path}/${destination}`, error => {
    if (error) {
        throw error;
    }
});
