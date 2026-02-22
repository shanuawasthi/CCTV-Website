// const mongoose = require("mongoose");

// const serviceSchema = new mongoose.Schema({
//    title: String,
//    description: String
// });

// module.exports = mongoose.model("Service", serviceSchema);
const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);