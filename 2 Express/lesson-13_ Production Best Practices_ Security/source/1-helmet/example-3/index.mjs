import express from 'express';
import helmet from 'helmet';

const app = express();

// X-Frame-Options: SAMEORIGIN
app.use(helmet.frameguard());

app.get('/', (req, res) => {
    res.sendStatus(204);
});

app.listen(3000, () => {
    console.log('Servers started on 3000 port!');
});
