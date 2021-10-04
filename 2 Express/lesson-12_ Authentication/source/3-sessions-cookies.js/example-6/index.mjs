import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.cookie('date', new Date(), {
        httpOnly: true,
        maxAge: 30000,
        path: '/users'
    });

    res.setHeader('content-type', 'text/html');
    res.status(200).send(`
        <h1>Main</h1>
        <a href="/users">To users</a>
    `);
});

app.get('/users', (req, res) => {
    res.status(200).send(`
        <h1>Users</h1>
    `);
});

app.listen(3000, () => {
    console.log(`Server started on 3000 port`);
});
