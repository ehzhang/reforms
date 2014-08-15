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

  // POST - Create a new user (admin only)
  router.post('/records', isLoggedIn, function(req, res){
    var record = new Record(req.body);
    record.save();
    // Send back the record when saved
    // TODO: Add error handling on save
    res.json(record)
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

  // Middleware to handle authenticated requests
  function isLoggedIn(req, res, next){
    if (req.isAuthenticated()){
      return next()
    }
    res.json({message: 'Not authorized!'})
  }

};
