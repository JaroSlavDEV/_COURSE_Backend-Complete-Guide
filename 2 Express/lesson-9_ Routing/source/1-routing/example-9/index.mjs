import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    console.log(req.query);
    console.log(req.query.name);
    res.send('We received new GET request');
});

app.listen(port, () => {
    console.log(`Server API was started! Reserved port is ${port}`);
});

export { app };
