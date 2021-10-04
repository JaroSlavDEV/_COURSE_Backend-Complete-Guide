const express = require('express');
const rp = require('request-promise');

const app = express();

app.get('/users', async (req, res) => {
    const data = await rp('https://jsonplaceholder.typicode.com/users', {
        json: true
    });

    res.status(200).json({ data });
});

module.exports = { app };
