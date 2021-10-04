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

// For async
process.on('unhandledRejection', (error, promise) => {
    console.log(promise);

    console.log(error.name);
    console.log(error.message);
    // Loggly
    // Graylog
    // ELK
    // SMS
    // Email
    // write to log file
});

// For sync
process.on('uncaughtException', err => {
    // uncaught exception
});

app.listen(port);
