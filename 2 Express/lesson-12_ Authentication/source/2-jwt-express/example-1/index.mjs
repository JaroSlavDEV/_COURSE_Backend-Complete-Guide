import express from 'express';

const app = express();

app.use(express.json());

const usersData = [{ email: 'jdoe@example.com', password: '123456' }];

// Authorization middleware
const authenticate = (req, res, next) => {
    const { authorization } = req.headers;

    console.log(authorization); // Basic amRvZUBlbWFpbC5jb206MTIzNDU2  /// login:password

    if (!authorization) {
        return res.status(401).json({ message: 'credentials are not valid' });
    }

    const [type, credentials] = authorization.split(' ');
    const [email, password] = Buffer.from(credentials, 'base64')
        .toString()
        .split(':');

    // Simulate DB search
    const user = usersData.find(({ email: userEmail }) => email === userEmail);
    if (!user) {
        return res.status(401).json({ message: 'credentials are not valid' });
    }

    if (password === user.password) {
        return next();
    }

    return res.status(401).json({ message: 'credentials are not valid' });
};

app.post('/api/login', [authenticate], (req, res) => {
    res.sendStatus(204);
});

app.listen(3000, () => {
    console.log(`Server started on 3000 port`);
});
