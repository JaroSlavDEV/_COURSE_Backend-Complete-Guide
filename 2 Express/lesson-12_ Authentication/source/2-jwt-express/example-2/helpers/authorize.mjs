// Core
import jwt from 'jsonwebtoken';

export const authorize = async (req, res, next) => {
    const token = req.headers['x-token'];

    if (!token) {
        return res.status(401).json({ message: 'token not found' });
    }

    try {
        const verify = await jwt.verify(token, 'super secret pa$$w0rd');

        console.log(verify); // { name: 'John', iat: 1551352077 }

        next();
    } catch ({ message }) {
        return res.status(401).json({ message });
    }
};
