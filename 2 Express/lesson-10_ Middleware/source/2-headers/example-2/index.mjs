import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    const { 'user-agent': userAgentCapitalize } = req.headers;
    // OR
    const userAgentLowerCase = req.headers['user-agent'];

    res.send(`User agent: ${userAgentCapitalize} — ${userAgentLowerCase}\n`);
});

app.listen(port);
