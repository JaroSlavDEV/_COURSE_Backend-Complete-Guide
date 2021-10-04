const fs = require('fs');
const zlib = require('zlib');
const file = process.argv[2];
// process.env { PORT: 7000 }
// process.argv [ /path/to/binary, /path/to/script, ./data/countries.json]

fs.createReadStream(file)
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream(`${file}.gz`));
