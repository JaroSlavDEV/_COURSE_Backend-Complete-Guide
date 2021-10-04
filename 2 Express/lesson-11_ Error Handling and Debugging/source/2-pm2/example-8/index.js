const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

app.get('/', async (req, res) => {
    for (let i = 0; i < 1e7; i++) {
        Math.random(); // do some silly work
    }
    res.sendStatus(200);
});

// app.get('/users', async (req, res) => {
//     res.sendStatus(200);
// });

const server = app.listen(port);

// zero downtime
process.on('SIGINT', () => {
    console.info('SIGINT signal received.');

    server.close(err => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
    });
});

// Windows
// process.on('message', msg => {
//     if (msg == 'shutdown') {
//         console.log('Closing all connections...');
//         setTimeout(() => {
//             console.log('Finished closing connections');
//             process.exit(0);
//         }, 1500);
//     }
// });
