const fs = require('fs');

const content = '<h1>Hello world!!!</h1>';

fs.writeFile('./data/index.html', content, error => {
    if (error) {
        throw error;
    }

    console.log('file written');
});
