const express = require('express');
const rp = require('request-promise');

const app = express();

app.get('/users', async (req, res) => {
    try {
        const { data } = await rp('http://localhost:4000/users', {
            json: true
        });

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = { app };
