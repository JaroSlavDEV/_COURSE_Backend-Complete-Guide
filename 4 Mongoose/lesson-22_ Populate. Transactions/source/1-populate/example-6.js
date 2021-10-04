const mongoose = require('mongoose');
const { connection } = require('../common');

connection
    .then(async () => {
        // User schema
        const userSchema = new mongoose.Schema({
            name: String,
            order: {
                type: mongoose.Types.ObjectId,
                ref: 'orders',
            },
        });
        // Order schema
        const orderSchema = new mongoose.Schema({
            product: String,
        });

        // User model
        const user = mongoose.model('customers', userSchema);
        // Order model
        const order = mongoose.model('orders', orderSchema);

        const orderData = await order.create({ product: 'Oranges' });
        const userData = await user.create({
            name: 'John Doe',
            order: new mongoose.Types.ObjectId(),
        });

        const data = await user.findOne({ name: 'John Doe' }).populate('order');

        console.log(data); // null
        console.log(data.order); // null
    })
    .catch(error => {
        console.error('Error:', error);
    });
