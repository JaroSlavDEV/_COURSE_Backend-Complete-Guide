const EventEmitter = require('events').EventEmitter;

const loop = new EventEmitter();

// special event
// prependListener
loop.once('newListener', (event, listener) => {
    // RangeError: Maximum call stack size exceeded
    if (event === 'event') {
        // Insert a new listener in front
        loop.on('event', () => {
            console.log('First event handler');
        });
    }
});

loop.once('newListener', (event, listener) => {
    // RangeError: Maximum call stack size exceeded
    if (event === 'event1') {
        // Insert a new listener in front
        loop.on('event1', () => {
            console.log('First event handler');
        });
    }
});

// 1. Начинаем добавлять слушатель события event
// 2. Срабатывает слушатель события newListener
// 3. После того как отработал newListener он удалятеся так как добавлен через once
// 4. Добавляется лушатель основого события event.

loop.on('event', () => {
    console.log('Second event handler');
});

loop.on('event', () => {
    console.log('Third event handler');
});

loop.on('event1', () => {
    console.log('Third event handler');
});

loop.emit('event');
loop.emit('event1');
