import express from 'express';
import path from 'path';

const port = process.env.PORT || 3000;

const app = express();

const options = {
    extensions: ['htm', 'html'],
    setHeaders: (res, path, stat) => {
        res.set('X-Date', new Date());
        res.set('X-File-Size', `${stat.size} bytes`);
    },
};

app.use(
    express.static(path.join(path.resolve(), 'example-13', 'public'), options),
);

app.get('/users', (req, res) => {
    res.status(200).json({ data: 'Hello from server!' });
});

app.listen(port);
