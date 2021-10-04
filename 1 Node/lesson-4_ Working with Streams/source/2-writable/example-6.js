const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Why I should study Node.js? ', answer => {
    console.log(`Because of ${answer} :)`);

    rl.close();
});
