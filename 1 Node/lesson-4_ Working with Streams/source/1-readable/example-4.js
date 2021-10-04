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

        console.log('objectMode', objectMode); // default: false
        console.log('highWaterMark', highWaterMark, 'bytes'); // default: 16384
        console.log('buffer', buffer); // default: BufferList { head: null, tail: null, length: 0 }
        console.log('length', length); // default: 0
        console.log('flowing', flowing); // default: null

        this.run();
    }

    run() {
        this.on('data', chunk => {
            console.log('\n---');
            console.log(
                `chunk = ${chunk} chunk isBuffer ${Buffer.isBuffer(
                    chunk,
                )} and chunk.length is ${chunk.length}`,
            );
            console.log('---\n');
        });

        const {
            objectMode,
            highWaterMark,
            buffer,
            length,
            flowing,
        } = this._readableState;

        this.on('end', () => {
            console.log('Readable on end event');
            console.log('objectMode', objectMode); //false
            console.log('highWaterMark', highWaterMark); //16384
            console.log('buffer', buffer); //[] - пустой массив
            console.log('buffer.length', buffer.length); //0
            console.log('flowing', flowing); //true !!!так как у нас есть обработчик события 'data'
        });

        this.on('error', error => {
            console.log('Readable error ', error);
        });
    }

    _read() {
        const data = this.data.shift();

        if (!data) {
            this.push(null);
        } else {
            this.push(data);
        }
    }
}

let array = ['1', '2', '3', '4', '5'];
const options = {
    objectMode: false,
    highWaterMark: 1,
};

const rs = new StorageReader(array, options);
