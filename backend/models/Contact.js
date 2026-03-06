const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  address: { type: String },
  phone: { type: String },
  email: { type: String },
  whatsapp: { type: String }
});

module.exports = mongoose.model('Contact', contactSchema);