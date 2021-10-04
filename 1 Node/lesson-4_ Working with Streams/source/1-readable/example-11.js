// Stream 3 interface
process.stdin.on('data', data => {
    if (data.toString() === 'close\n') {
        process.stdin.pause();
        // process.exit();
        console.log('Let start our party!');
    }
});
