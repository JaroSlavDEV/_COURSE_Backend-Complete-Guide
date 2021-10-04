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

        console.log('objectMode', objectMode); // default: false
        console.log('highWaterMark', highWaterMark, 'bytes'); // default: 16384
        console.log('buffer', buffer); // default: BufferList { head: null, tail: null, length: 0 }
        console.log('length', length); // default: 0
        console.log('flowing', flowing); // default: null

        this.init();
    }

    init() {
        this.on('data', chunk => {
            console.log('\n---');
            console.log(
                `chunk = ${chunk} chunk isBuffer ${Buffer.isBuffer(
                    chunk
                )} and chunk.length is ${chunk.length}`
            );
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

let array = ['1'];
const options = {};

const rs = new StorageReader(array, options);
