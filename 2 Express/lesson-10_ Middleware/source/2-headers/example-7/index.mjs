import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.get('/html', (req, res) => {
    res.type('.html'); // 'text/html'

    // OR
    // res.type('html'); // 'text/html'

    res.send('<h1>Hello</h1>');
});

app.get('/json', (req, res) => {
    res.type('json'); // 'application/json'

    // OR
    // res.type('application/json'); // 'application/json'

    res.send({ message: 'hello' });
});

app.get('/png', (req, res) => {
    res.type('png'); // image/png:

    res.send('some image');
});

app.listen(port);
