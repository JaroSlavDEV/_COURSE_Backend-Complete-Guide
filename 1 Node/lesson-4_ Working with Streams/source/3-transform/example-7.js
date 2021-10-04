const fs = require('fs');
const zlib = require('zlib');
const file = process.argv[2];

const { Transform } = require('stream');

const start = process.hrtime();
console.time('arch');

const progress = new Transform({
    transform(chunk, encoding, callback) {
        process.stdout.write(`\n${process.hrtime(start)}`);
        callback(null, chunk);
    },
});

fs.createReadStream(file)
    .pipe(zlib.createGzip())
    .pipe(progress)
    .pipe(fs.createWriteStream(`${file}.gz`))
    .on('finish', () => {
        console.log('\nDone');
        console.timeEnd('arch');
    });

// console.time
// process.hrtime
