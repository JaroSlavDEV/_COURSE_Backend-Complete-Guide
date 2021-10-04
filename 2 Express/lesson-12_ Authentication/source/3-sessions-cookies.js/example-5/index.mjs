import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.cookie('date', new Date(), {
        httpOnly: true,
        maxAge: 5000, // max age of the cookie 5s
    });

    res.setHeader('content-type', 'text/html');
    res.status(200).send(`
        <h1>Hello</h1>
    `);
});

app.listen(3000, () => {
    console.log(`Server started on 3000 port`);
});
