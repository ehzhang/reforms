var mongoose = require('mongoose'),
    bcrypt   = require('bcrypt-nodejs');

// define the schema for our admin model
var schema = new mongoose.Schema({
  username: String,
  password: String
});

// methods ======================
// generating a hash
schema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
schema.methods.checkPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('Admin', schema);
