import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res, next) => {
    console.log('the response will be sent by the next function...');
    setTimeout(() => {
        next();
    }, 2000);
}, (req, res) => {
    res.send('next function was called');
});

app.listen(port, () => {
    console.log(`Server API was started! Reserved port is ${port}`);
});

export { app };