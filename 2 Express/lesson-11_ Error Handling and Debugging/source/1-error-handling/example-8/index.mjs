import path from 'path';
import express from 'express';

const port = process.env.PORT || 3000;
const app = express();

app.get('*', async (req, res, next) => {
    const error = new Error(`${req.ip} tried to reach ${req.originalUrl}`);
    error.statusCode = 400;
    error.shouldRedirect = true;

    next(error);
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode ? err.statusCode : 500;

    if (err.shouldRedirect) {
        res.sendFile(
            path.join(path.resolve(), 'example-8', 'public/index.html'),
        );
    } else {
        res.status(statusCode).json({ message: err.message });
    }
});

app.listen(port);
