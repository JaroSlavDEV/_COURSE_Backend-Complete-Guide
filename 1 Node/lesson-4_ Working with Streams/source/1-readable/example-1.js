const { Readable } = require('stream');
// const Readable = require('stream').Readable;

// const Stream = require('stream');
// class StorageReader extends Stream.Readable {}

class StorageReader extends Readable {
    constructor(data, options) {
        super(options);

        this.data = data;
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

const array = [1, 2, 3];
// TypeError [ERR_INVALID_ARG_TYPE]:
// The "chunk" argument must be one of type string, Buffer, or Uint8Array. Received type number
const options = {};
const rs = new StorageReader(array, options);
