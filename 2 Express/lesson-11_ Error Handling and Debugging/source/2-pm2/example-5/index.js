const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

app.get('/', async (req, res) => {
    res.sendStatus(200);
});

// app.get('/users', async (req, res) => {
//     res.sendStatus(200);
// });

app.listen(port);
