import express from 'express';
import v4 from 'uuid/v4';
import session from 'express-session';
import path from 'path';

const app = express();

const sessionOptions = {
    key: 'user',
    secret: 'pa$$worD',
    resave: false,
    rolling: true,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 3 * 60 * 60
    }
};

app.use(express.json({ limit: '10kb' }));
app.use(session(sessionOptions));

app.get('/', (req, res) => {
    const file = path.resolve('index.html');
    res.sendFile(file);
});

app.get('/api/csrf', (req, res) => {
    const token = v4();
    req.session.csrf = token;
    res.status(200).json({ token });
});

app.post('/api/login', (req, res) => {
    const { csrf } = req.session;
    const _csrf = req.headers['x-csrf'];

    if (csrf !== _csrf) {
        return res.status(400).json({ error: 'malformed csrf' });
    }

    res.status(200).json({ message: 'OK' });
});

app.listen(3000, () => {
    console.log('Servers started on 3000 port!');
});
