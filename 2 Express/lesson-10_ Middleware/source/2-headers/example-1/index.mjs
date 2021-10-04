import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    const userAgentCapitalize = req.header('User-Agent');
    const userAgentLowerCase = req.header('user-agent');
    // const userAgentLowerCase = req.header('content-type');
    // const userAgentLowerCase = req.header('Content-Type');

    res.send(`User agent: ${userAgentCapitalize} — ${userAgentLowerCase}`);
});

app.listen(port);
