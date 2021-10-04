const { Transform } = require('stream');

const upperCaseTr = new Transform({
    transform(chunk, encoding, done) {
        this.push(`${chunk.toString().toUpperCase()}\n`);
        done();
    }
});

process.stdin.pipe(upperCaseTr).pipe(process.stdout);
