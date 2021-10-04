import express from 'express';
import helmet from 'helmet';

const app = express();

// Surrogate-Control: no-store
// Cache-Control: no-store, no-cache, must-revalidate, proxy-revalidate
// Pragma: no-cache
// Expires: 0
// app.use(helmet());
app.use(helmet.noCache());

app.get('/', (req, res) => {
    res.sendStatus(204);
});

app.listen(3000, () => {
    console.log('Servers started on 3000 port!');
});
