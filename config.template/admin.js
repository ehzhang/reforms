// Create a default admin user.
var User = require('../server/models/Admin');
var user = new User();
    user.username = 'admin';
    user.password = user.generateHash('password');
    user.save();