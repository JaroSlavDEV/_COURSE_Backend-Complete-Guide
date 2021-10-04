const Readable = require('./source/readable.js');
const Writable = require('./source/writable.js');
const Chunk = require('./source/chunk.js');
const { Transform } = require('stream');

class Transformer extends Transform {
    constructor(options = {}) {
        super(options);

        const {
            objectMode,
            highWaterMark,
            decodeStrings,
        } = this._writableState;

        console.log('\n -------- Transform in constructor');
        console.log('objectMode', objectMode); // default: false
        console.log('highWaterMark', highWaterMark); // default: 16384
        console.log('decodeStrings', decodeStrings); // default: true
        console.log('buffer', this._writableState.getBuffer()); // default: []

        this.init();
    }

    init() {
        this.on('close', () => {
            console.log('\n------ Transform on close');
        });

        this.on('drain', () => {
            console.log('\n------ Transform on drain');
        });

        this.on('error', error => {
            console.log('\n------ Transform on error', error);
        });

        this.on('finish', () => {
            console.log('\n------ Transform on finish');
        });

        this.on('end', () => {
            console.log('\n------ Transform on end');
        });

        this.on('pipe', () => {
            console.log('\n------ Transform on pipe');
        });
    }

    _transform(chunk, encoding, done) {
        this.push(new Chunk(chunk));
        done();
    }

    _flush(done) {
        console.log('do something before stream is finished');

        done();
    }
}

const data = ['1', '2', '3'];

let r_options = {
    encoding: 'utf8',
};
const rs = new Readable(data, r_options);

const t_options = {
    readableObjectMode: true,
    decodeStrings: false,
};

const ts = new Transformer(t_options);

const w_options = {
    objectMode: true,
};

const ws = new Writable(w_options);

rs.pipe(ts).pipe(ws);
// читаем — трансформируем → записываем
