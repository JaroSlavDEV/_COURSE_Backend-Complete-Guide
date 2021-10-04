// Core
import jwt from 'jsonwebtoken';

export const authorize = async (req, res, next) => {
    const token = req.headers['x-token'];

    if (!token) {
        return res.status(401).json({ message: 'token not found' });
    }

    try {
        await jwt.verify(token, 'password2'); // wrong password

        next();
    } catch ({ message }) {
        // invalid signature
        console.error(message);
        return res.status(401).json({ message: 'credentials are not valid' });
    }
};
