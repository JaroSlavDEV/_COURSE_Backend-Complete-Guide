const { Writable } = require('stream');

class Source extends Writable {
    constructor(options = {}) {
        super(options);
    }

    _write(chunk, encoding, done) {
        console.log(chunk);
        done();
    }
}

module.exports = Source;
