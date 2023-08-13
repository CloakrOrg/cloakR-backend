const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// this will be used during admin & police login
const AuthSchema = new Schema({
    email: String,
    password: String,
    role: String
});

module.exports = mongoose.model('Auth', AuthSchema);