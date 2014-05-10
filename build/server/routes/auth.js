(function() {
  var User, auth, passport;

  passport = require('passport');

  auth = require('../config/auth');

  User = require('../models/user');

  exports.initialize = function(app) {
    app.get('/login', function(req, res) {
      return res.render('login');
    });
    app.post('/login', passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login'
    }));
    app.get('/logout', auth.authenticate, function(req, res) {
      req.logout();
      return res.redirect('/login');
    });
    app.get('/register', function(req, res) {
      return res.render('register');
    });
    return app.post('/register', function(req, res) {
      var userexists;
      console.log('Registering ' + req.body.username);
      return userexists = User.findOne({
        username: req.body.username
      }, function(err, user) {
        if (err) {
          throw new Error(500);
        }
        if (user) {
          throw new Error(409);
        }
        user = new User({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
        });
        return user.save(function(err, user) {
          if (err) {
            throw new Error(500);
          }
          return res.redirect('/login');
        });
      });
    });
  };

}).call(this);
