// Stream 2 interface
process.stdin.on('readable', function() {
    console.log(this.read());
});

// OR
// process.stdin.on('readable', () => {
//     console.log(process.stdin.read());
// });
