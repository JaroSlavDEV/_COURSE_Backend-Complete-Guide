const mongoose = require('mongoose');
const { connection } = require('../common');

connection
    .then(() => {
        const userSchema = new mongoose.Schema({
            name: String,
        });

        // const userSchema = new mongoose.Schema({
        //     name: String,
        //     sex: { type: String, enum: ['m', 'f'], required: true },
        // });

        console.log(userSchema);
    })
    .catch(error => {
        console.error('Connection error', error);
    });
