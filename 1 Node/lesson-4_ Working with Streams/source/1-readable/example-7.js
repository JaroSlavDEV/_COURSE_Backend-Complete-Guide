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
            flowing,
        } = this._readableState;

        this.init();
    }

    init() {
        this.on('data', chunk => {
            console.log('\n---');
            // console.log(chunk, typeof chunk);

            // isBuffer false
            console.log(
                `chunk = ${chunk} chunk isBuffer ${Buffer.isBuffer(
                    chunk,
                )} and chunk.length is ${chunk.length}`,
            );
            console.log('---\n');
            console.log(typeof chunk, chunk);
        });

        const {
            objectMode,
            highWaterMark,
            buffer,
            length,
            flowing,
        } = this._readableState;

        // in object counts
        console.log('highWaterMark', highWaterMark); // 16

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

let array = [1];
const options = {
    objectMode: true,
};

const rs = new StorageReader(array, options);
