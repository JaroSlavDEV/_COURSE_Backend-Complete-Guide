// For this example you need to run index.html file
// from source/2-cors folder by command http-server
import express from 'express';
import cors from 'cors';

const app = express();

const whitelist = [
    'http://localhost:8080',
    'http://127.0.0.1:8080',
    'http://localhost:8081',
];
const corsOptions = {
    origin: (origin, callback) => {
        console.log('origin', origin);

        const isExists = whitelist.some(item => item === origin);
        if (isExists) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200,
};

app.options('/api/users', cors(corsOptions));

// Router level
app.put('/api/users', cors(), (req, res) => {
    res.status(200).json({ message: 'updated' });
});

app.delete('/api/users', (req, res) => {
    res.status(200).json({ message: 'removed' });
});

app.use((error, req, res, next) => {
    console.error('error', error.message);
    res.status(500).json({ message: error.message });
});

app.listen(3000, () => {
    console.log('Servers started on 3000 port!');
});
