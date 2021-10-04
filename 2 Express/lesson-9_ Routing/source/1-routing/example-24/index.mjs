import express from 'express';
import { router } from './customers';

const port = process.env.PORT || 3000;

const app = express();

app.use('/customers', router);

app.listen(port, () => {
    console.log(`Server API was started! Reserved port is ${port}`);
});

export { app };