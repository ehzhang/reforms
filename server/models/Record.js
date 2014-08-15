var mongoose = require('mongoose');

// define the schema for our record
var schema = new mongoose.Schema({
  title: String,
  description: String,
  expiresAt: Date
});

module.exports = mongoose.model('Record', schema);
