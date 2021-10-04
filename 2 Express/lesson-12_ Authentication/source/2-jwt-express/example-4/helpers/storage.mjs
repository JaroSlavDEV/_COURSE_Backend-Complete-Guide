class Storage {
    constructor() {
        this.storage = new Map();
    }

    save({ token, key }) {
        this.storage.set(token, key);
    }

    getKey(token) {
        const key = this.storage.get(token);
        return key;
    }
}

export const storage = new Storage();
