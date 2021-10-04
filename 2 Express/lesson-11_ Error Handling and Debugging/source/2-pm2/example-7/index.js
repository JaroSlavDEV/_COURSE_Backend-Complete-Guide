const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

// need to run Apache benchmark to simulate workload

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
