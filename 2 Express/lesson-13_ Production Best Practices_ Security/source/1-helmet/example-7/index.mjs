import express from 'express';
import helmet from 'helmet';

const app = express();

app.use(
    helmet.expectCt({
        enforce: true,
        maxAge: 90 * 60 * 60 // 90 days
    })
);

app.get('/', (req, res) => {
    res.setHeader('content-type', 'text/html');
    res.status(200).send(`
        <h1>Hello</h1>
    `);
});

app.listen(3000, () => {
    console.log('Servers started on 3000 port!');
});
