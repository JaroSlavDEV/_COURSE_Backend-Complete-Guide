// For this example you need to run index.html file
// from source/2-cors folder by command http-server
import express from 'express';
import cors from 'cors';

const app = express();

const corsOptions = {
    // origin: '*', // default
    origin: 'http://localhost:8080',
    // some smart devices can not handle default 204 status
    optionsSuccessStatus: 200,
};

// need to be defined because of preflight request
app.options('/api/users', cors(corsOptions));

app.post('/api/login', (req, res) => {
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
