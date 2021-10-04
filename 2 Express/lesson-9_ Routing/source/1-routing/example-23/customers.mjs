import express from 'express';
import { data } from './data';

export const router = express.Router();

router.get('/', (req, res) => {
    res.json(data);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

    const customer = data.filter((item) => {
        return item.id === id;
    });

    if (customer.length === 1) {
        res.json(customer[0]);
    } else {
        res.sendStatus(404);
    }
});