class Chunk {
    constructor(chunk) {
        this.set(chunk);
    }

    set(chunk) {
        this._chunk = chunk;
    }

    get() {
        return this._chunk;
    }

    inPow(pow = 2) {
        return Math.pow(this.get(), pow);
    }
}

module.exports = Chunk;
