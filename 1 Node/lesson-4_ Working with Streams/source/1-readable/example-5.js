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

        this.init();
    }

    init() {
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
            console.log('buffer', buffer); // default: BufferList { head: null, tail: null, length: 0 }
            console.log('buffer.length', buffer.length); //0
            console.log('flowing', flowing); //true because of data listener
        });

        this.on('close', () => {
            console.log('\x1b[33m', '\nReadable on close event\n', '\x1b[0m');
        });

        // custom event
        this.on('writeToLog', () => {
            console.log(
                '\x1b[33m',
                '\nReadable on writeToLog event\n',
                '\x1b[0m',
            );
        });
    }

    _read() {
        const data = this.data.shift();

        if (!data) {
            this.push(null);
            // built-in event
            this.emit('close');
            // custom event
            this.emit('writeToLog');
        } else {
            this.push(data);
        }
    }
}

let array = ['1'];
const options = {};

const rs = new StorageReader(array);
