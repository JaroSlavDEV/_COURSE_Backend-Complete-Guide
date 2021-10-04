// Core
import jwt from 'jsonwebtoken';

// Instruments
import { storage } from './storage';

export const authorize = async (req, res, next) => {
    const token = req.headers['x-token'];

    if (!token) {
        return res.status(401).json({ message: 'token not found' });
    }

    try {
        const key = storage.getKey(token);
        await jwt.verify(token, key);

        next();
    } catch ({ message }) {
        // invalid signature
        return res.status(401).json({ message });
    }
};
