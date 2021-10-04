// For this example you need to run index.html file
// from source/2-cors folder by command http-server
import express from 'express';

const app = express();

app.use((req, res, next) => {
    // Access to fetch at 'http://localhost:3000/api/login' from origin 'http://localhost:8080'
    // has been blocked by CORS policy: Response to preflight request doesn't pass access control check:
    // No 'Access-Control-Allow-Origin' header is present on the requested resource.
    // If an opaque response serves your needs, set the request's mode to 'no-cors'
    // to fetch the resource with CORS disabled.

    res.header('Access-Control-Allow-Origin', '*');

    if (req.method === 'OPTIONS') {
        res.sendStatus(204);
    } else {
        next();
    }
});

app.post('/api/login', (req, res) => {
    res.status(200).json({ message: 'OK' });
});

app.listen(3000, () => {
    console.log('Servers started on 3000 port!');
});
