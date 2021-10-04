import express from 'express';
import { ValidationError, NotFoundError } from './helpers';

const port = process.env.PORT || 3000;

const app = express();

app.get('/', async (req, res) => {
    try {
        await Promise.reject(new NotFoundError('can not get data'));

        res.sendStatus(200);
    } catch (error) {
        console.log(error);

        const statusCode = error.statusCode ? error.statusCode : 500;
        res.status(statusCode).json({ message: error.message });
    }
});

app.listen(port);
