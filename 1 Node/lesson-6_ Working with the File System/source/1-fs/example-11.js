const fs = require('fs');

// F_OK;
// R_OK;
// W_OK;
// X_OK;

// Deprecated
// fs.exists

fs.access('file.txt', fs.constants.F_OK, error => {
    console.log(`file.txt ${error ? 'does not exist' : 'exists'}`);
});

fs.access(__filename, fs.constants.F_OK, error => {
    console.log(`example-11 ${error ? 'does not exist' : 'exists'}`);
});

fs.access(__filename, fs.constants.X_OK, error => {
    console.log(`example-11 ${error ? 'not executable' : 'executable'}`);
});

fs.access(__filename, fs.constants.R_OK, error => {
    console.log(`example-11 ${error ? 'not readable' : 'readable'}`);
});
