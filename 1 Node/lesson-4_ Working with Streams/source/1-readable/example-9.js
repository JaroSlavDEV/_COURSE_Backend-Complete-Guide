// process.stdin implements Readable Stream
process.stdin.on('data', data => {
    if (data.toString() === 'start\n') {
        console.log('GO!!!!!!!!!!!!!');
    }

    if (data.toString() === 'end\n') {
        process.exit();
    }

    console.log(`Length of data: ${data.length}`);
});
