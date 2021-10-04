const callback = str => {
    console.log(str);
};

const timerId = setTimeout(callback, 3000, 'Text');
console.log(timerId);
// Timeout {
//     _called: false,
//     _idleTimeout: 3000,
//     _idlePrev: [TimersList],
//     _idleNext: [TimersList],
//     _idleStart: 101,
//     _onTimeout: [Function: callback],
//     _timerArgs: [Array],
//     _repeat: null,
//     _destroyed: false,
//     [Symbol(unrefed)]: false,
//     [Symbol(asyncId)]: 5,
//     [Symbol(triggerId)]: 1 }

clearTimeout(timerId);

// setTimeout(() => {
//     console.log(timerId);
// }, 4000);
// Timeout {
//     _called: false,
//     _idleTimeout: -1,
//     _idlePrev: null,
//     _idleNext: null,
//     _idleStart: 101,
//     _onTimeout: null,
//     _timerArgs: [Array],
//     _repeat: null,
//     _destroyed: false,
//     [Symbol(unrefed)]: false,
//     [Symbol(asyncId)]: 5,
//     [Symbol(triggerId)]: 1 }
