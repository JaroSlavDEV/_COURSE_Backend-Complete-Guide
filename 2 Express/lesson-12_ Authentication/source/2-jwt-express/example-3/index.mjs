// Core
import express from 'express';

// Instruments
import { authenticate, authorize } from './helpers';

const app = express();

app.use(express.json());

app.post('/api/login', [authenticate], (req, res) => {
    res.sendStatus(204);
});

// Should fail
// Wrong jwt verification password
app.post('/api/users', [authorize], (req, res) => {
    res.status(200).json({ data: [req.body] });
});

app.listen(3000, () => {
    console.log(`Server started on 3000 port`);
});
