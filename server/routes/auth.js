module.exports = function(router, passport){

  // ---------------------------------------------
  // AUTHENTICATION
  // ---------------------------------------------

  router.post('/login',
    passport.authenticate('local',
      {
        successRedirect: '/admin',
        failureRedirect: '/'
      })
  );

  router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  })

};

