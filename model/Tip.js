const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TipSchema = new Schema({
    crimeId: String,
    userId: String,
    status: String,
    date: String,
    text: String,
    image: String,
    video: String,
    location: String
});

module.exports = mongoose.model('Tip', TipSchema);