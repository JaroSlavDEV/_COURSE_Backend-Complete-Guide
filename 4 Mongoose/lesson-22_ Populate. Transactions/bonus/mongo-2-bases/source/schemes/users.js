const mongoose = require('mongoose');

const schema = new mongoose.Schema({ name: { type: String, required: true } });
const users = mongoose.model('users', schema);

module.exports = users;
