import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    Promise.reject(new Error('can not get data'));
    res.sendStatus(200);
});

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

process.on('unhandledRejection', async (error, promise) => {
    console.log(error.message);

    try {
        await promise;
    } catch (error) {
        console.log(error.message);
    }
});

app.listen(port);
