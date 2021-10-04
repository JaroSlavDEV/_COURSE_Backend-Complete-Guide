import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.get(
    '/users/:id',
    (req, res, next) => {
        // if the user ID is 0, skip to the next route
        if (req.params.id === '0') {
            next('route');
        } else {
            next();
        }
    },
    (req, res) => {
        // send a regular response
        res.send('regular\n');
    },
);

// handler for the /user/:id path, which sends a special response
app.post('/users/:id', (req, res, next) => {
    res.send('special POST \n');
});

app.get('/users/:id', (req, res, next) => {
    res.send('special GET \n');
});

app.listen(port);
