const express = require('express');

const port = process.env.PORT || 3003;

const app = express();

app.get('/orders', (req, res) => {
    res.sendStatus(200);
});

app.listen(port);
