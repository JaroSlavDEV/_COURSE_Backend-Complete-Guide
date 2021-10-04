const { Readable } = require('stream');

class StorageReader extends Readable {
    constructor(data, options) {
        super(options);

        this.data = data;
        this.init();
    }

    init() {
        this.on('data', chunk => {
            console.log('\n---');
            console.log(chunk); // <Buffer 31>
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

const array = ['1', '2', '3'];
const options = {};

const rs = new StorageReader(array, options);
