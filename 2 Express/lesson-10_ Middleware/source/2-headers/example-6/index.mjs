import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    res.setHeader('content-type', 'application/json');
    res.setHeader('content-length', '100');

    res.end(JSON.stringify({ message: 'root' }));
});

app.listen(port);
