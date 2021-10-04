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
        .toString()
        .split(':');

    if (password === '123456') {
        const token = await jwt.sign(req.body, 'password1');

        res.setHeader('X-Token', token);
        return next();
    }

    return res.status(401).json({ message: 'credentials are not valid' });
};
