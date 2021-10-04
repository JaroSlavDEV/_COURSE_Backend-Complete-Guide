import express from 'express';
import { ValidationError } from './helpers';

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    const promise = Promise.reject(new ValidationError('can not get data'));
    promise.name = 'users';
    res.sendStatus(200);
});

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

const server = app.listen(port);

process.on('unhandledRejection', async (error, promise) => {
    try {
        await promise;

        promise.handled = true;
    } catch (error) {
        if (error.name === 'Error') {
            console.log('error');
        } else if (error.name === 'ValidationError') {
            server.close();
        }

        console.log(`Unhandled rejection error: ${error.message}`);
    }
});

process.on('rejectionHandled', promise => {
    console.log(
        `Is promise '${promise.name}' handled? — ${promise.handled || false}`,
    );
});
