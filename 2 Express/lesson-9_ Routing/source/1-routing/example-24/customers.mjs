import express from 'express';

export const router = express.Router();

router.all('*', (req, res) => {
    res.send('Hello');
});
