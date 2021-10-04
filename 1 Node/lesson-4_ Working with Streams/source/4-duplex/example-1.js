const { Duplex } = require('stream');

const ds = new Duplex({
    allowHalfOpen: false, // default: true, if false then close read after done with write
    readableObjectMode: false, // default: false objectMode for readable
    writableObjectMode: false // default: false objectMode for writable
});
