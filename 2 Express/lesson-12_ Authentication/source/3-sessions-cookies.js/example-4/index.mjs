import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    console.log(new Date(Date.now() + 5000));

    res.cookie('date', new Date(), {
        httpOnly: true,
        expires: new Date(Date.now() + 5000) // expires in 5s
    });

    res.setHeader('content-type', 'text/html');
    res.status(200).send(`
        <h1>Hello</h1>
    `);
});

app.listen(3000, () => {
    console.log(`Server started on 3000 port`);
});
