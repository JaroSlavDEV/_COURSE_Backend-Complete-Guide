import express from 'express';
import path from 'path';

const app = express();

app.get('/', (req, res) => {
    const file = path.resolve('index.html');
    res.sendFile(file);
});

app.post('/api/login', (req, res) => {
    res.status(200).json({ message: 'OK' });
});

app.listen(3000, () => {
    console.log('Servers started on 3000 port!');
});
