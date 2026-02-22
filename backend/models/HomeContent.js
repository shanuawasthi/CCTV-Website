const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  mission: String,
  history: String,
  about: String,
  certificationText: String,
  certificationImage: String
});

module.exports = mongoose.model("HomeContent", homeSchema);