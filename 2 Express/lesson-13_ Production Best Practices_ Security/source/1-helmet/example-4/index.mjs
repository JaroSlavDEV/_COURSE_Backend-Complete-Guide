import express from 'express';
import helmet from 'helmet';

const app = express();

// Disable X-Powered-By header
app.use(helmet.hidePoweredBy());
// OR
// app.disable('x-powered-by');

app.get('/', (req, res) => {
    res.sendStatus(204);
});

app.listen(3000, () => {
    console.log('Servers started on 3000 port!');
});
