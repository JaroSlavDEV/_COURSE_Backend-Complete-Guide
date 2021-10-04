import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

// Ned to show in browser
app.get('/users', (req, res) => {
    res.set('Location', 'https://example.com/customers');
    res.sendStatus(301);

    // OR
    // res.redirect(301, 'https://example.com/customers');
});

app.listen(port);
