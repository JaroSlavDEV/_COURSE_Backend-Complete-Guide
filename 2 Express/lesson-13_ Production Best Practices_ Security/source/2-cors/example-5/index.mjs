// For this example you need to run index.html file
// from source/2-cors folder by command http-server
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors()); // app level

app.post('/api/login', (req, res) => {
    res.status(200).json({ message: 'OK' });
});

app.put('/api/users', (req, res) => {
    res.status(200).json({ message: 'updated' });
});

app.delete('/api/users', (req, res) => {
    res.status(200).json({ message: 'removed' });
});

app.listen(3000, () => {
    console.log('Servers started on 3000 port!');
});
