import express from 'express';
import querystring from 'querystring';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.cookie('date', new Date(), {
        httpOnly: true,
        maxAge: 60000,
        path: '/users'
    });

    res.setHeader('content-type', 'text/html');
    res.status(200).send(`
        <h1>Hello</h1>
        <a href="/users">To users</a>
    `);
});

app.get('/users', (req, res) => {
    const { cookie } = req.headers;

    res.status(200).send(`
        <h1>Users raw cookie: ${cookie}</h1>
        <h2>Users parsed cookie: ${querystring.parse(cookie).date}</h2>
    `);
});

app.listen(3000, () => {
    console.log(`Server started on 3000 port`);
});
