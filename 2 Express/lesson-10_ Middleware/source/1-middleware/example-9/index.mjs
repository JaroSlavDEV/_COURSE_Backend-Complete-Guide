import express from 'express';

const port = process.env.PORT || 3000;

const app = express();
const usersRouter = express.Router();
const customersRouter = express.Router();

// a middleware function with no mount path. This code is executed for every request to the router
usersRouter.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
usersRouter.use(
    '/:id',
    (req, res, next) => {
        console.log('Request URL:', req.originalUrl);
        next();
    },
    (req, res, next) => {
        console.log('Request Type:', req.method);
        next();
    },
);

customersRouter.get('/', (req, res) => {
    res.sendStatus(204);
});

// mount the router on the app
app.use('/customers', customersRouter);
app.use('/users', usersRouter);

app.listen(port);
