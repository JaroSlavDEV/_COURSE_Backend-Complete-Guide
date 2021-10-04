import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

const requestTime = (req, res, next) => {
    req.reqTime = Date.now(); // timestamp

    next();
};

app.use(requestTime);

app.get('/:id', (req, res) => {
    const responseText = `Requested at: ${req.reqTime}!\n`;
    console.log(req.params);

    res.send(responseText);
});

app.get('/stories', (req, res) => {
    res.send('Hello World!');
});

app.listen(port);
