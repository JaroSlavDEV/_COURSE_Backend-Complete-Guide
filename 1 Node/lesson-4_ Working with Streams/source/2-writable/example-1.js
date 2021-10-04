const StorageReader = require('./source/readable.js');
const { Writable } = require('stream');

class StorageWriter extends Writable {
    constructor(options = {}) {
        super(options);

        const {
            objectMode,
            highWaterMark,
            decodeStrings,
            getBuffer,
        } = this._writableState;

        console.log('objectMode', objectMode); // default: false
        console.log('highWaterMark', highWaterMark); // default: 16384
        console.log('decodeStrings', decodeStrings); // default: true. Converts data to buffer
    }

    _write(chunk, encoding, done) {
        console.log(chunk);
        done();
    }
}

const data = ['1', '2', '3'];
const r_options = {};
const rs = new StorageReader(data, r_options);

const w_options = {};
const ws = new StorageWriter(w_options);
rs.pipe(ws);

// source.pipe(destination)
