const fs = require('fs');

fs.stat(__filename, (error, stats) => {
    console.log(stats);
    console.log('Размер', stats.size, 'bytes');
});
