const mongoose = require('mongoose');

const PartSchema = new mongoose.Schema({
    category: String,
    subcategory: String,
    name: String,
    number: String,
    make: String,
    model: String,
    year: String,
    image: String,
    price: Number,
    stock: Number
});

module.exports = mongoose.model('Part', PartSchema);
