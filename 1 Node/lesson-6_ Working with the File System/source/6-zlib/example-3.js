const zlib = require('zlib');
const https = require('https');
const fs = require('fs');

const photosWritableStream = fs.createWriteStream('./data/photos.json.gz');

https.get('https://jsonplaceholder.typicode.com/photos', data => {
    data.pipe(zlib.createGzip()).pipe(photosWritableStream);
});
