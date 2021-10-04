import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.transform('/', (req, res) => {
    res.send('We received new PATCH request');
});

app.listen(port, () => {
    console.log(`Server API was started! Reserved port is ${port}`);
});

export { app };