import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.put('/', (req, res) => {
    console.log(req.body);
    res.send('We received new PUT request');
});

app.listen(port, () => {
    console.log(`Server API was started! Reserved port is ${port}`);
});

export { app };