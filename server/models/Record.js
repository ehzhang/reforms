var mongoose = require('mongoose');

// define the schema for our record
var schema = new mongoose.Schema({
  title: String,
  description: String,
  name: String,
  email: String,
  age: Number,
  height: Number
});

module.exports = mongoose.model('Record', schema);
