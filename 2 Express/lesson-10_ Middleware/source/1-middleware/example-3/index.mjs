import express from 'express';
import { requestTime } from './my-middleware';

const port = process.env.PORT || 3000;

const app = express();

// const result = requestTime({ type: 'minutes' });
// typeof result === 'function'
// (req, res, next) => {}

app.use(requestTime({ type: 'minutes' }));

app.get('/', (req, res) => {
    const responseText = `Requested at: ${req.requestTime}!`;
    res.send(responseText);
});

app.get('/stories', (req, res) => {
    res.send('Hello World!');
});

app.listen(port);
