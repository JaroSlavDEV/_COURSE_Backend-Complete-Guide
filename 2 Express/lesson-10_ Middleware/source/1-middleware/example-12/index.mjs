import express from 'express';
import path from 'path';

const port = process.env.PORT || 3000;

const app = express();

// express.static ← built-in

app.use(express.static(path.join(path.resolve(), 'example-12', 'public')));

app.get('/users', (req, res) => {
    res.status(200).json({
        data: `Current time: ${new Date().toISOString()}`,
    });
});

app.listen(port);
