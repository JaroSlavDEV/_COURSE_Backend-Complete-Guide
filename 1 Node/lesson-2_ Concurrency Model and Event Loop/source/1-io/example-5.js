const fs = require('fs');

console.log('start');

fs.readFile('./wrong-file.js', (error, file) => {
    // если не обработать ошибку то процес остановлен не будет
    // if (error) throw error;
    console.log(file);
});

console.log('end');
