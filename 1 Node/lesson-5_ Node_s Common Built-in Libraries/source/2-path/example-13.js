const path = require('path');

console.log(path.resolve());

console.log(path.resolve('data', `${Date.now()}-file.log`));
