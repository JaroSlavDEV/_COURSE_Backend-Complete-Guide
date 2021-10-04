import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.get('/customers/:customerId/orders/:orderId', (req, res) => {
    const { customerId, orderId } = req.params;
    res.send(`Customer id: ${customerId}, order id: ${orderId}`);
});

app.listen(port, () => {
    console.log(`Server API was started! Reserved port is ${port}`);
});

export { app };
