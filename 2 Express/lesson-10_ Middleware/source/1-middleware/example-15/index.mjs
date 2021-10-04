import express from 'express';
import path from 'path';

const port = process.env.PORT || 3000;
const app = express();

const md1 = (req, res, next) => {
    res.header('X-MD-1', 'first');
    next();
};

const md2 = (req, res, next) => {
    res.header('X-MD-2', 'second');
    // res.removeHeader('X-MD-1');
    next();
};

app.get('/', [md1, md2], (req, res) => {
    res.sendStatus(200);
});

app.listen(port);
