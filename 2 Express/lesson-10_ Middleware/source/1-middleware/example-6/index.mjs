import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.get('/users/:id', (req, res, next) => {
    res.send('USER');
});

app.listen(port);
