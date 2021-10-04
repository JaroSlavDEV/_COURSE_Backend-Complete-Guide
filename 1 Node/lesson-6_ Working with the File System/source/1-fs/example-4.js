const fs = require('fs');

fs.readFile('./file', { encoding: 'utf-8' }, (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});

// Prod:
// fs.readFile('./file', { encoding: 'utf-8' }, (error, data) => {
//     if (error) {
//         throw error;
//     } else {
//         console.log(data);
//     }
// });
