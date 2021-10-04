const express = require('express');
const authenticate = require('./authenticate');

const app = express();

app.use(express.json());

// Simple DB :)
const storage = [];

app.get('/users', [authenticate(storage)], (req, res) => {
    res.status(200).json({ data: storage });
});

app.post('/users', (req, res) => {
    const user = { ...req.body, id: Date.now(), password: `A${Date.now()}B` };
    storage.push(user);

    res.status(200).json({ data: user.password });
});

app.use((error, req, res, next) => {
    res.status(500).json({ message: error.message });
});

module.exports = { app };
