const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CrimeSchema = new Schema({
    title: String,
    description: String,
    date: String,
    state: String,
    type: String,
    suspect: String,
    victim: String,
    image: String
});

module.exports = mongoose.model('Crime', CrimeSchema);