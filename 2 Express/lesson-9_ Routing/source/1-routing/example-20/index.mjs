import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.get('/customers/:id', (req, res) => {
    if (req.params.id === '777') {
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});

app.listen(port, () => {
    console.log(`Server API was started! Reserved port is ${port}`);
});

export { app };
