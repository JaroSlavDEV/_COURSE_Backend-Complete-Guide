import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.get('/customers/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Customer id: ${id}`);
});

app.listen(port, () => {
    console.log(`Server API was started! Reserved port is ${port}`);
});

export { app };
