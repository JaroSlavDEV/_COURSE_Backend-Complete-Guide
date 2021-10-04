process.on('SIGTERM', () => {
    console.log('Got SIGTERM');

    setTimeout(() => {
        console.log('Timer was run');
    }, 3000); // 3 sec
});

setTimeout(() => {
    console.log('Timer 2 was run');
}, 300000); // 5 mins
