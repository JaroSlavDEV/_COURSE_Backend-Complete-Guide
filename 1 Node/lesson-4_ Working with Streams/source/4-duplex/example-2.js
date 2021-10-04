const { Duplex } = require('stream');

const ds = new Duplex({
    write(chunk, encoding, cb) {
        console.log('=> write:', chunk.toString());
        cb();
    },

    read(size) {
        if (this.currentCharCode > 90) {
            this.push(null);

            return;
        }

        this.push(String.fromCharCode(this.currentCharCode++));
    },
});

ds.currentCharCode = 65;
process.stdin.pipe(ds).pipe(process.stdout);
