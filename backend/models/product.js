// const mongoose = require('mongoose');

// const ProductSchema = new mongoose.Schema({
//     name: String,
//     category: String,
//     image: String,
//     specs: [String],
//     price: Number
// });

// module.exports = mongoose.model('Product', ProductSchema);
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  specs: [{ type: String }],
  price: { type: Number, required: true },
  image: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);