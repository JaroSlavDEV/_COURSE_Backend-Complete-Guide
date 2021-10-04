import express from 'express';
import path from 'path';

const port = process.env.PORT || 3000;

const app = express();

app.get('/keynotes', (req, res) => {
    const file = path.resolve(
        path.join('example-9', 'data', '1-lesson-overview.pdf'),
    );

    res.sendFile(file);
});

app.listen(port);
