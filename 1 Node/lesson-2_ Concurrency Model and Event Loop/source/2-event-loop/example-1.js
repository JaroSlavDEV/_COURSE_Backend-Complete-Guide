// Timeout
// console.time('timeout');
setTimeout(() => {
    console.log('timeout1');
    // console.timeEnd('timeout');
}, 0);

setTimeout(() => {
    console.log('timeout2');
}, 0);

// Immediate
setImmediate(() => {
    console.log('immediate');
});

// Random output

// First variant
// timeout1
// immediate
// timeout2

// Second variant
// immediate
// timeout1
// timeout2
