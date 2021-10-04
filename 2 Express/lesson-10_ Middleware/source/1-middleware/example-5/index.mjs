import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.use('/users/:id', (req, res, next) => {
    console.log('Request Type:', req.method);
    next();
});

app.all('*', (req, res) => {
    res.status(404).json({ message: 'request received' });
});

app.listen(port);
