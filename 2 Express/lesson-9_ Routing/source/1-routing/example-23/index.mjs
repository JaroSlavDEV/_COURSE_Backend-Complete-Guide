import express from 'express';
import { router } from './customers';

const port = process.env.PORT || 3000;

const app = express();

// /customers
// router.get('/', (req, res) => {
//     res.json(data);
// });

// /customers/:id
// router.get('/:id', (req, res) => {
//     const id = req.params.id;

//     const customer = data.filter((item) => {
//         return item.id === id;
//     });

//     if (customer.length === 1) {
//         res.json(customer[0]);
//     } else {
//         res.sendStatus(404);
//     }
// });

// app.use('/auth', auth);

app.use('/customers', router);

app.listen(port, () => {
    console.log(`Server API was started! Reserved port is ${port}`);
});

export { app };
