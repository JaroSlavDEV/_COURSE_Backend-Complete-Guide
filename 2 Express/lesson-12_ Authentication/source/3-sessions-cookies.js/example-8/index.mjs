import express from 'express';
import session from 'express-session';

const app = express();

const sessionOptions = {
    key: 'user',
    secret: 'pa$$w0rd',
    resave: false, // disable session resave
    rolling: true, // reset max age on every use
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 15 * 60 * 1000, // 15m
    },
};

app.use(express.json());
app.use(session(sessionOptions));

app.get('/', (req, res) => {
    const { name } = req.query;

    req.session.user = { name };

    res.setHeader('content-type', 'text/html');
    res.status(200).send(`
        <h1>Hello</h1>
        <a href="/users">To users</a>
    `);
});

app.get('/users', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/');
    }

    const { user } = req.session;

    res.status(200).send(`
        <h1>Users from cookie : ${user.name}</h1>
    `);
});

app.listen(3000, () => {
    console.log(`Server started on 3000 port`);
});
