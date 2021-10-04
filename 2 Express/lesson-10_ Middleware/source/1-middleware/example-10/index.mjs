import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.get('/customers', (req, res) => {
    throw new Error('some unhandled error');
    res.sendStatus(200);
});

app.use((err, req, res, next) => {
    console.error(err.name, '\n');
    console.error(err.message, '\n');
    // console.error(err.stack, '\n');
    res.status(500).send('Something broke!');
});

app.listen(port);
