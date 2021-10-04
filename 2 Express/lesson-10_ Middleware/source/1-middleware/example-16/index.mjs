import express from 'express';
import path from 'path';
import { droids } from './droids';

const port = process.env.PORT || 3000;
const app = express();

app.set('views', path.join(path.resolve(), 'example-16/views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Star Wars',
        message: 'Famous Droids from Star Wars',
        droids: ['R2D2', 'C3PO'],
    });
});

app.get('/:droid', (req, res) => {
    const { droid } = req.params;
    const { img, price } = droids[droid];

    res.render('droid', {
        title: droid.toUpperCase(),
        name: droid,
        img,
        price,
    });
});

app.listen(port);
