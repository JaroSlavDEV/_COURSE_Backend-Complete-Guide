import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

if (!process.env.DEBUG) {
    throw new Error('Please set DEBUG env variable first');
}
// DEBUG=express:*

app.get('/', (req, res, next) => {
    res.sendStatus(200);
});

app.listen(port);
