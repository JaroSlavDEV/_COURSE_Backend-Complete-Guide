const { Readable } = require('stream');

class StorageReader extends Readable {
    constructor(data, options) {
        super(options);

        this.data = data;
        const {
            objectMode,
            highWaterMark,
            buffer,
            length,
            flowing
        } = this._readableState;

        this.init();
    }

    init() {
        this.on('data', chunk => {
            console.log('\n---');
            // isBuffer false
            console.log('buffer.length ', this._readableState.buffer.length);
            console.log(
                `chunk = ${chunk} chunk isBuffer ${Buffer.isBuffer(
                    chunk
                )} and chunk.length is ${chunk.length}`
            );
            console.log('---\n');
        });

        const {
            objectMode,
            highWaterMark,
            buffer,
            length,
            flowing
        } = this._readableState;

        this.on('close', () => {
            console.log('Readable on close event');
        });
    }

    _read() {
        let data = this.data.shift();
        if (!data) {
            this.push(null);
        } else {
            this.push(data);
        }
    }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const options = {
    objectMode: true,
    highWaterMark: 4
};

const rs = new StorageReader(array, options);

// Simulate data READ delay
rs.on('data', chunk => {
    rs.pause();
    setTimeout(() => {
        rs.resume();
    }, 1000);
});
