const fs = require('fs');

fs.readFile(__filename, (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data); // Buffer
    }
});

// fs.readFileSync
// https.server();

// fs.readFile(__filename, (error, data) => {
//     if (error) {
//         console.log(error);
//     } else {
//         https.server();
//     }
// });
