import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    throw new Error('can not get data');
    res.sendStatus(200);
});

app.use((err, req, res, next) => {
    // KISS
    res.status(500).json({ message: err.message });
});

app.listen(port);
