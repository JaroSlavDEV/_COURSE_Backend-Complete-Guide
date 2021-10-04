import express from 'express';
import { delay, timeout } from './utils';

const port = process.env.PORT || 3000;

const app = express();
const router = express.Router();

router.get('/users/:id', async (req, res) => {
    await delay(10);

    res.send(`Request URL: ${req.path}\n`);
});

app.use('/', [timeout(1000)], router);

app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});

app.listen(port);
