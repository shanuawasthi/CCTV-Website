const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    category: String,
    image: String,
    specs: [String],
    price: Number
});

module.exports = mongoose.model('Product', ProductSchema);