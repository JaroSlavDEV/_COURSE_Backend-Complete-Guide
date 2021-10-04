import express from 'express';
import helmet from 'helmet';
import path from 'path';

const app = express();

// Content-Security-Policy: default-src 'self' 'unpkg.com'
// X-Content-Security-Policy: default-src 'self'
// X-WebKit-CSP: default-src 'self'
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'", 'unpkg.com'],
            fontSrc: ["'self'"],
        },
    }),
);

app.get('/', (req, res) => {
    const file = path.resolve(path.join('example-6', 'index.html'));

    res.sendFile(file);
});

app.listen(3000, () => {
    console.log('Servers started on 3000 port!');
});
