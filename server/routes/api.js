var Record = require('../models/Record');

module.exports = function(router) {

  /**
   *  API!
   */

  // ---------------------------------------------
  // RECORDS
  // ---------------------------------------------

  // GET all records (admin only)
  router.get('/records', isLoggedIn, function(req, res){
    res.json({message: 'yay logged in'})
  });

  // GET a specific record
  router.get('/records/:id', function(req, res){
    // Return the JSON!
    var username = req.params.id;
    var foo = {hacker: username};
    res.json(foo)
  });

  // PUT - Update a specific Record JSON
  router.put('/records/:id', function(req, res){
    var id = req.params.username;
    res.json({msg: "Updated :)", id: id})
  });

  // POST - Create a new user (admin only)
  router.post('/records/:id', isLoggedIn, function(req, res){
    res.json({message: 'yay logged in'})
  });

  // Middleware to handle authenticated requests
  function isLoggedIn(req, res, next){
    if (req.isAuthenticated()){
      return next()
    }
    res.json({message: 'Not authorized!'})
  }

};
