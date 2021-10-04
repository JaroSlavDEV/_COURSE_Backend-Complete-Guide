import express from 'express';
import helmet from 'helmet';

const app = express();

// Helmet will add by default:
// dnsPrefetchControl: controls browser DNS prefetching
// frameguard: to prevent clickjacking
// hidePoweredBy: to remove the X-Powered-By header
// hsts: for HTTP Strict Transport Security
// ieNoOpen: sets X-Download-Options for IE8+
// noSniff: to keep clients from sniffing the MIME type
// xssFilter: adds some small XSS protections
app.use(helmet());

app.get('/', (req, res) => {
    res.sendStatus(204);
});

app.listen(3000, () => {
    console.log('Servers started on 3000 port!');
});
