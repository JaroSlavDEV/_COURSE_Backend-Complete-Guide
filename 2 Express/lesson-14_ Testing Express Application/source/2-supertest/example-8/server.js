const express = require('express');

const app = express();

app.use(express.json());

app.post('/users', (req, res) => {
    try {
        if (req.body.password !== 'abcd') {
            throw new Error('wrong user data');
        }

        res.status(200).json({ message: 'ok' });
    } catch (error) {
        if (error.name === 'NotFoundError') {
            return res.status(404).json({ message: error.message });
        }

        res.status(400).json({ message: error.message });
    }
});

app.use((error, req, res, next) => {
    res.status(500).json({ message: error.message });
});

module.exports = { app };
