const mongoose = require('mongoose');
const { connection } = require('../common');

connection
    .then(async () => {
        // User schema
        const userSchema = new mongoose.Schema({
            name: String,
            orders: [mongoose.SchemaTypes.ObjectId],
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
            orders: [orderData._id],
        });

        const data = await user.findOne();
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
