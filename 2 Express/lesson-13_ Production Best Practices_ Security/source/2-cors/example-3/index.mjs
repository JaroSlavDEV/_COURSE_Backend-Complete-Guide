// For this example you need to run index.html file
// from source/2-cors folder by command http-server
import express from 'express';

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    // Access to fetch at 'http://localhost:3000/api/login' from origin 'http://localhost:8080'
    // has been blocked by CORS policy: Request header field content-type is not allowed
    // by Access-Control-Allow-Headers in preflight response.
    res.header('Access-Control-Allow-Headers', 'Content-Type');

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
