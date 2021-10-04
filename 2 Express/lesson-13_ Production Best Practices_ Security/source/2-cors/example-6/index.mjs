// For this example you need to run index.html file
// from source/2-cors folder by command http-server
import express from 'express';
import cors from 'cors';

const app = express();

// need to be defined because of preflight request
app.options('/api/login', cors());
app.options('/api/users', cors());

app.post('/api/login', cors(), (req, res) => {
    res.status(200).json({ message: 'OK' });
});

// Router level
app.put('/api/users', cors(), (req, res) => {
    res.status(200).json({ message: 'updated' });
});

app.delete('/api/users', (req, res) => {
    res.status(200).json({ message: 'removed' });
});

app.listen(3000, () => {
    console.log('Servers started on 3000 port!');
});
