import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.post('/', (req, res) => {
    res.send('We received new POST request');
});

app.get('/', (req, res) => {
    res.sendStatus(405);
});

app.listen(port, () => {
    console.log(`Server API was started! Reserved port is ${port}`);
});

export { app };
