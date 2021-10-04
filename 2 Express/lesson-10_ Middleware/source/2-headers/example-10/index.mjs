import express from 'express';
import path from 'path';

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    const body = 'hello';

    res.writeHead(200, {
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/plain',
    });
    res.end(body);
});

app.listen(port);
