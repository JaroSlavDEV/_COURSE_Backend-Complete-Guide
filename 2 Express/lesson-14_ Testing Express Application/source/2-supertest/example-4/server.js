const express = require('express');

const app = express();

app.use(express.json());

// Simple DB :)
const storage = [];

app.get('/users', (req, res) => {
    res.status(200).json({ data: storage });
});

app.post('/users', (req, res) => {
    const user = { ...req.body, id: Date.now() };
    storage.push(user);

    res.sendStatus(204);
});

app.use((error, req, res, next) => {
    res.status(500).json({ message: error.message });
});

module.exports = { app };
