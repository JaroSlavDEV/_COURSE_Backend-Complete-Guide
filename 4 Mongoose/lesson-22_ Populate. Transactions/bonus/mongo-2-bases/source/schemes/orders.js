const mongoose = require('mongoose');

const conn = mongoose.createConnection('mongodb://localhost:27018/orders', {
    useNewUrlParser: true,
});

const schema = new mongoose.Schema({
    uid: { type: mongoose.SchemaTypes.ObjectId, required: true },
    title: { type: String, required: true },
});

const users = conn.model('orders', schema);

module.exports = users;
