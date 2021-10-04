const EventEmitter = require('events');

class Storage extends EventEmitter {
    execute(task) {
        console.log('begin with task');
        this.emit('start');
        task();
        this.emit('end');
        console.log('end with task');
    }
}

const storage = new Storage();

storage.on('start', () => console.log('start execution'));
storage.on('end', () => console.log('end execution'));

const task = () => console.log('------> process item <------');

storage.execute(task);
