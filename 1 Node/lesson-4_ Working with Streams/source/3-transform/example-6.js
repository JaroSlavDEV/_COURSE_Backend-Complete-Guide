const fs = require('fs');
const zlib = require('zlib');
const file = process.argv[2];

const { Transform } = require('stream');

const progress = new Transform({
    transform(chunk, encoding, callback) {
        process.stdout.write('*');
        callback(null, chunk);
    },
});

fs.createReadStream(file, { highWaterMark: 500 })
    .pipe(zlib.createGzip()) // transform
    .pipe(progress) // transform
    .pipe(fs.createWriteStream(`${file}.gz`))
    .on('finish', () => console.log('\nDone'));
