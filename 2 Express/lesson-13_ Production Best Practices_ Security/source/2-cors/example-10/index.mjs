// For this example you need to run index.html file
// from source/2-cors folder by command http-server
import express from 'express';
import cors from 'cors';

const app = express();

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    // send preflight request to the second handler
    preflightContinue: true, //next
};

app.use(cors(corsOptions));
// another OPTIONS handler
app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        res.setHeader('X-Date', new Date());
        res.sendStatus(200);
    } else {
        next();
    }
});

app.post('/api/login', (req, res) => {
    res.status(200).json({ message: 'OK' });
});

app.put('/api/users', (req, res) => {
    res.status(200).json({ message: 'updated' });
});

app.use((error, req, res, next) => {
    console.error(error.message);
    res.status(500).json({ message: error.message });
});

app.listen(3000, () => {
    console.log('Servers started on 3000 port!');
});
