(function() {
  var LocalStrategy, User, passport;

  passport = require('passport');

  LocalStrategy = (require('passport-local')).Strategy;

  User = (require('../models/user')).User;

  passport.use(new LocalStrategy(function(username, password, done) {
    console.log('Authenticating...');
    return User.findOne({
      username: username
    }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, {
          message: 'Invalid credentials'
        });
      }
      return user.comparePassword(password, function(err, isMatch) {
        if (err) {
          return done(err);
        }
        if (isMatch) {
          return done(null, user);
        }
        return done(null, false, {
          message: 'Invalid credentials'
        });
      });
    });
  }));

  passport.serializeUser(function(user, done) {
    return done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    return User.findOne({
      _id: id
    }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, {
          message: 'Invalid user'
        });
      }
      return done(null, user);
    });
  });

  exports.authenticate = function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    return next(new Error(401));
  };

}).call(this);
