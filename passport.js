var config          = require('./config/auth'),
    LocalStrategy   = require('passport-local').Strategy,
    User            = require('./server/models/Admin');

module.exports = function(passport) {

  // Serialize the user by grabbing the id.
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // Find the associated User model from that id
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user){
      done(err, user)
    })
  });

  passport.use(new LocalStrategy(
      function(username, password, done) {
        User.findOne({ username: username }, function(err, user) {
          if (err) { return done(err); }
          if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
          }
          if (!user.checkPassword(password)) {
            return done(null, false, { message: 'Incorrect password.' });
          }
          return done(null, user);
        });
      }
  ));
};
