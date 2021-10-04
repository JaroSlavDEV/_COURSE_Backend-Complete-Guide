const express = require('express');

const app = express();

app.get('/users', (req, res) => {
    res.status(200).json({ data: [{ name: 'John', age: 36 }] });
});

module.exports = { app };
