var Record = require('../models/Record');

module.exports = function(router) {


  // Middleware to handle authenticated requests
  function isLoggedIn(req, res, next){
    if (req.isAuthenticated()){
      return next()
    }
    res.json({message: 'Not authorized!'})
  }

  /**
   *  API!
   */

  // ---------------------------------------------
  // RECORDS
  // ---------------------------------------------

  // GET all records (admin only)
  router.get('/records', isLoggedIn, function(req, res){
    Record.find({}, function(err, users){
      res.json(users);
    })
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
    Record.findById(req.params.id, function(err, doc){
      if (err) {
        return res.json(err)
      }
      if (!doc) {
        return res.json({message: 'Record does not exist.'})
      }
      return res.json(doc);
    });
  });

  // PUT - Update a specific Record
  router.put('/records/:id', function(req, res){
    var id = req.params.username;
    res.json({msg: "Updated :)", id: id})
  });

};
