const zlib = require('zlib');
const fs = require('fs');

const gzip = zlib.createGzip(); // архиватор
const r = fs.createReadStream('./data/index.html');
const w = fs.createWriteStream('./data/index.html.gz');
r.pipe(gzip).pipe(w);
