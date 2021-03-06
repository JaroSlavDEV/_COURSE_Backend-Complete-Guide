const mongoose = require('mongoose');
const { connection } = require('../common');

connection
    .then(async () => {
        const userSchema = new mongoose.Schema({ name: String });
        const User = mongoose.model('customers', userSchema);

        const user = new User({ name: 'Joe' });

        try {
            const data = await user.save();

            console.log(data);
        } catch (error) {
            console.error(error);
        }
    })
    .catch(error => {
        console.error('Connection error', error);
    });
