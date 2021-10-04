const { pipeline } = require('stream');
const { promisify } = require('util');
const fs = require('fs');
const zlib = require('zlib');

// pipe → pipeline

// fs.createReadStream(file)
//     .pipe(zlib.createGzip()) // Error!!!
//     .pipe(fs.createWriteStream(`${file}.gz`));

pipeline(
    fs.createReadStream('./data/file.log'),
    zlib.createGzip(), // Error
    fs.createWriteStream('./data/file.log.gz'),
    err => {
        if (err) {
            console.error('Pipeline failed', err);
            return;
        }

        console.log('Pipeline succeeded');
    },
);

// const pipeline = promisify(stream.pipeline);

// async function run() {
//   await pipeline(
//     fs.createReadStream('archive.tar'),
//     zlib.createGzip(),
//     fs.createWriteStream('archive.tar.gz')
//   );
//   console.log('Pipeline succeeded.');
// }

// run().catch(console.error);
