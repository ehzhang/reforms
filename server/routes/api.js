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
    res.json({message: 'Successfuly created!', doc: record})
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
    var updatedData = req.body;
    if (req.params.id == updatedData._id){
      Record.findByIdAndUpdate(updatedData._id,
          {$set: updatedData}, function(err, doc){
            if (err) {
              return res.send(400,
                  {
                    messsage: 'This is bad!',
                    error: err
                  })
            }
            if (!doc) {
              return res.send(400,
                  {
                    message: 'Record not found.'
                  }
              )
            }
            res.json({
              message: 'Successfully updated!',
              doc: doc
            });
          });
    } else {
      res.json({message: 'Update unsuccessful :('})
    }

  });

  router.delete('/records/:id', isLoggedIn, function(req, res){
    var id = req.params.id;
    Record.findByIdAndRemove(id, function(){
      res.json({message: "Record successfully removed."})
    });
  })

};
