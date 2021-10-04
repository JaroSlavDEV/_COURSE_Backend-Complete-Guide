// process.stdout implements Writable Stream
const interval = setInterval(() => {
    process.stdout.write(`${new Date()}\n`);
}, 1000);

setTimeout(() => {
    clearInterval(interval);
}, 5000);
