var User = require('./models/Admin');

module.exports = function(app) {

  // Application ------------------------------------------
  app.get('/', function(req, res){
    res.sendfile('./client/index.html');
  });

  // Debugging!
  // TODO: REMOVE THIS!!!!!!
  app.get('/create', function(req, res){
    var user = new User();

    user.username = 'hello';
    user.password = user.generateHash('hunter2');

    user.save();
    res.json(user);
  });

  app.get('/admin', function(req, res){
    if (!req.isAuthenticated()){
      res.redirect('/')
    } else {
      res.sendfile('./client/admin.html');
    }
  });

  // Wildcard all other GET requests to the angular app
  app.get('*', function(req, res){
    res.sendfile('./client/index.html');
  })

};
