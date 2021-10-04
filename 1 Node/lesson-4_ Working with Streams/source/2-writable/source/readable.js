const { Readable } = require('stream');

class Source extends Readable {
    constructor(data = [], options = {}) {
        super(options);
        this._data = data;
        this.on('data', chunk => {});
    }
    _read() {
        let data = this._data.shift();
        if (!data) {
            this.push(null);
        } else {
            this.push(data);
        }
    }
}

module.exports = Source;
