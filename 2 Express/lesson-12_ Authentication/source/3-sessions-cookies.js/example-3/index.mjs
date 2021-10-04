import express from 'express';
import pem from 'pem';
import https from 'https';

pem.createCertificate({ days: 1, selfSigned: true }, (error, keys) => {
    if (error) {
        throw err;
    }
    const app = express();

    app.use(express.json());

    app.get('/', (req, res) => {
        res.cookie('date', new Date(), { httpOnly: true, secure: true });

        res.setHeader('content-type', 'text/html');
        res.status(200).send(`
            <script>console.log('cookie =>', document.cookie)</script>
            <h1>Hello</h1>
        `);
    });

    https
        .createServer({ key: keys.serviceKey, cert: keys.certificate }, app)
        .listen(3443, () => {
            console.log(`HTTPS server started on 3443 port`);
        });
});
