const express = require('express');
const mongoose = require('mongoose');
const { users, orders } = require('./schemes');

const app = express();

app.use(
    express.json({
        limit: '10kb',
    }),
);

app.post('/users', async (req, res) => {
    try {
        const { _id } = await users.create(req.body);

        res.status(201).json({ id: _id });
    } catch ({ message }) {
        res.status(400).json({ message });
    }
});

app.post('/orders', async (req, res) => {
    try {
        const { _id } = await orders.create(req.body);

        res.status(201).json({ id: _id });
    } catch ({ message }) {
        res.status(400).json({ message });
    }
});

app.get('/reports', async (req, res) => {
    try {
        const data = await orders
            .find({})
            .select('-_id -__v')
            .populate({ path: 'uid', model: users, select: '-_id -__v' });

        res.status(201).json({ data });
    } catch ({ message }) {
        res.status(400).json({ message });
    }
});

mongoose
    .connect('mongodb://localhost:27017/users', { useNewUrlParser: true })
    .then(() => {
        console.log('DB connected');

        app.listen(4000, () => {
            console.log('server is up on 4000 port!');
        });
    })
    .catch(error => {
        console.error(error);
    });
