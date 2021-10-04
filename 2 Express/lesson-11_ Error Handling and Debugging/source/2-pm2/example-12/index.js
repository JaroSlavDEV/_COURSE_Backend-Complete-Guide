const io = require('@pm2/io');
const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

const meter = io.meter({
    name: 'req/sec',
    samples: 1,
    timeframe: 60,
});

app.get('/', (req, res) => {
    meter.mark();
    res.sendStatus(200);
});

app.listen(port);
