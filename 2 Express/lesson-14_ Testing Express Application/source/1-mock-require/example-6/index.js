// This example should be run with help of node rather than jest
const mock = require('mock-require');
let Storage = require('./storage');

mock('./storage', function() {
    this.getItem = () => {
        console.log('Mocked item');
    };
});

const storage1 = new Storage();
storage1.getItem(); // Unmocked item

Storage = mock.reRequire('./storage');

const storage2 = new Storage();
storage2.getItem(); // Mocked item
