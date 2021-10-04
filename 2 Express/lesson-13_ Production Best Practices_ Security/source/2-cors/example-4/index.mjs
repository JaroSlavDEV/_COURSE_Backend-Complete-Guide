// For this example you need to run index.html file
// from source/2-cors folder by command http-server
import express from 'express';

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, DELETE'); // ignore GET and POST methods
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

app.put('/api/users', (req, res) => {
    res.status(200).json({ message: 'OK' });
});

app.delete('/api/users', (req, res) => {
    res.status(200).json({ message: 'OK' });
});

app.listen(3000, () => {
    console.log('Servers started on 3000 port!');
});
