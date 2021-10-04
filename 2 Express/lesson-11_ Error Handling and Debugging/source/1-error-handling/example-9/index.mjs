import express from 'express';

const port = process.env.PORT || 3000;
const app = express();

app.get('*', (req, res, next) => {
    throw new Error('Kabooooom!');
    // next(new Error('Kabooooom!'));
});

app.get('*', (req, res, next) => {
    console.log('this will not print');
});

app.use((error, req, res, next) => {
    res.status(500).json({ message: error.message });
});

app.listen(port);
