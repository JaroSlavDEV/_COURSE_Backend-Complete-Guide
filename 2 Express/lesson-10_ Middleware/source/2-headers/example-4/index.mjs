import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    const content = { message: 'root' };
    const contentLength = Buffer.from(JSON.stringify(content)).length;

    res.header({
        'content-type': 'application/json',
        'content-length': contentLength,
        // 'content-length': 12, ← отправит данные не полностью 12 из 18 байт
        // 'content-length': '100', ← вызовет ошибку так как мы отправляем всего 18 bytes
        'x-warning':
            'with content type charset encoding will be added by default',
    });

    res.end(JSON.stringify(content));
});
app.listen(port);
