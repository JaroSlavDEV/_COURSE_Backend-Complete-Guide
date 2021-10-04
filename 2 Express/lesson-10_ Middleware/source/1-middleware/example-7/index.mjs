import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.use(
    '/users/:id',
    (req, res, next) => {
        console.log('Request URL:', req.originalUrl);
        // req
        // res
        next();
    },
    (req, res, next) => {
        console.log('Request Type:', req.method);
        // req
        // res
        next();
    },
    (req, res) => {
        res.sendStatus(204);
    },
);

app.listen(port);
