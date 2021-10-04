const fs = require('fs');

fs.appendFile('./data/append.txt', 'hello my friend!\n', error => {
    if (error) throw error;
    console.log('The "data to append" was appended to file!');
});
