const mongoose = require("mongoose");

// update schema according to usage
const FileSchema = new mongoose.Schema();

module.exports = mongoose.model('file', FileSchema);