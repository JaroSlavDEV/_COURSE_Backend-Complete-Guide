const zlib = require('zlib');
const fs = require('fs');

const photosReadableStream = fs.createReadStream('./data/photos.json.gz');
const photosWritableStream = fs.createWriteStream('./data/photos.json');

const unArch = zlib.createGunzip(); // деархиватор

photosReadableStream.pipe(unArch).pipe(photosWritableStream);
