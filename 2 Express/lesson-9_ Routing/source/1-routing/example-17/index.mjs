import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

const cb1 = (req, res, next) => {
    console.log('cb1');

    setTimeout(() => {
        next();
    }, 2000);
};

const cb2 = (req, res, next) => {
    console.log('cb2');
    
    setTimeout(() => {
        next();
    }, 2000);
};

const cb3 = (req, res, next) => {
    console.log('cb3');
    
    setTimeout(() => {
        res.send('The end');
    }, 2000);
};

app.get('/', [cb1, cb2, cb3]);

app.listen(port, () => {
    console.log(`Server API was started! Reserved port is ${port}`);
});

export { app };