// Core
import jwt from 'jsonwebtoken';

// Authorization middleware
export const authenticate = async (req, res, next) => {
    const auth = req.headers['authorization'];

    if (!auth) {
        return res.status(401).json({ message: 'no auth header' });
    }

    const [type, credentials] = auth.split(' ');
    const [email, password] = Buffer.from(credentials, 'base64')
        .toString() // jdoe@example.com:123456
        .split(':');

    if (password === '123456') {
        const token = await jwt.sign(req.body, 'super secret pa$$w0rd');

        res.setHeader('X-Token', token);
        return next();
    }

    return res.status(401).json({ message: 'credentials are not valid' });
};
