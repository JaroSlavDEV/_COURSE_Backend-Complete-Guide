const express = require('express');

const port = process.env.PORT || 3002;

const app = express();

app.get('/customers', (req, res) => {
    res.sendStatus(200);
});

app.listen(port);
