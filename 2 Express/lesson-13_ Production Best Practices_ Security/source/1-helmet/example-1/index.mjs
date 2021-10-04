import express from 'express';

const app = express();

app.use((req, res, next) => {
    res.setHeader('Surrogate-Control', 'no-store');
    res.setHeader(
        'Cache-Control',
        'no-store, no-cache, must-revalidate, proxy-revalidate'
    );
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', 0);
    next();
});

app.get('/', (req, res) => {
    res.sendStatus(204);
});

app.listen(3000, () => {
    console.log('Servers started on 3000 port!');
});
