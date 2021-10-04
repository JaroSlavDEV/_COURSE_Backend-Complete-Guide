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

    init() {
        this.on('drain', () => {
            console.log('\n------ writable on drain');
        });

        this.on('error', error => {
            console.log('\n------ writable on error', error);
        });

        this.on('finish', () => {
            console.log('\n------ writable on finish');
            console.log(
                '_writableState.getBuffer()',
                this._writableState.getBuffer(),
            );
        });
    }

    _write(chunk, encoding, done) {
        console.log(chunk);
        console.log(typeof chunk);
        done();
    }
}

const data = [1, 2, 3];
const r_options = {
    objectMode: true,
};
const rs = new StorageReader(data, r_options);

const w_options = {
    objectMode: true,
};
const ws = new StorageWriter(w_options);
rs.pipe(ws);
