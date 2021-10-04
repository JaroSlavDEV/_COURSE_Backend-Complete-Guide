process.on('exit', code => {
    if (code !== 0) {
        console.log(`Exit code: ${code}`);
        // API call
    }
});

console.log(a);
