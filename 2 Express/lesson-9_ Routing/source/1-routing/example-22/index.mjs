import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.route('/book')
    .get((req, res) => {
        res.send('Get a random book');
    })
    .post((req, res) => {
        res.send('Add a book');
    })
    .put((req, res) => {
        res.send('Update the book');
    })
    .patch((req, res) => {
        res.send('Update some part of the book');
    })
    .delete((req, res) => {
        res.send('Delete the book');
    });

app.listen(port, () => {
    console.log(`Server API was started! Reserved port is ${port}`);
});

export { app };
