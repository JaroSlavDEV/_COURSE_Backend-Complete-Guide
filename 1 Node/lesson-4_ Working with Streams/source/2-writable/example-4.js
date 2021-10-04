const StorageReader = require('./source/readable.js');
const { Writable } = require('stream');

class StorageWriter extends Writable {
    constructor(options = {}) {
        super(options);
        this.init();
    }

    init() {
        this.on('drain', () => {
            console.log('\n------ writable on drain');
        });
    }

    _write(chunk, encoding, done) {
        console.log('=> Chunk:', chunk);
        done();
    }
}

const data = [1, 2, 3, 4, 5];

const r_options = {
    objectMode: true,
    // highWaterMark: 16,
};
const rs = new StorageReader(data, r_options);

const w_options = {
    objectMode: true,
    highWaterMark: 1,
};
const ws = new StorageWriter(w_options);

rs.on('data', chunk => {
    console.log('rs in flowing mode', rs._readableState.flowing);
    toWriteOrNot(chunk, onDrain);
});

const onDrain = () => {
    console.log('rs in flowing mode', rs._readableState.flowing);
    rs.resume();
};

const toWriteOrNot = (data, cb) => {
    if (!ws.write(data)) {
        rs.pause();
        ws.once('drain', cb);
    } else {
        process.nextTick(cb);
    }
};
