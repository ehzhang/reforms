var User = require('./models/Admin');

module.exports = function(app) {

  // Application ------------------------------------------
  app.get('/', function(req, res){
    res.sendfile('./client/index.html');
  });

  app.get('/admin', function(req, res){
    if (!req.isAuthenticated()){
      res.redirect('/')
    } else {
      res.sendfile('./client/admin.html');
    }
  });

  app.get('partials/:name', function(req, res) {
    var name = request.params.name;
    res.sendfile('./client/partials/' + name);
  });

  // Wildcard all other GET requests to the angular app
  app.get('*', function(req, res){
    res.sendfile('./client/index.html');
  })

};
