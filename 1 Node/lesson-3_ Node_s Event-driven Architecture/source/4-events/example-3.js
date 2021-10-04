const EventEmitter = require('events').EventEmitter;

const storage = new EventEmitter();

// throw
storage.emit('error', 'Boom!');
