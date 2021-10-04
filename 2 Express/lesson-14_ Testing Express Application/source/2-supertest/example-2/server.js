const express = require('express');

const app = express();

app.get('/users', (req, res) => {
    res.status(200).json({ data: [{ name: 'John' }] });
});

module.exports = { app };
