var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user').User;

passport.use(new LocalStrategy(
		function(username, password, done){
			User.findOne({username: username}, function(err, user){
				if(err) return done(err);
				if(!user) return done(null, false, {message: 'Invalid credentials'});

				user.comparePassword(password, function(err, isMatch){
					if(err)
						return done(err);
					if(isMatch)
						return done(null, user);
					else
						return done(null, false, {message: 'Invalid credentials'});
				});
			});
		}
));

passport.serializeUser(function(user, done){
	return done(null, 'admin');
});
passport.deserializeUser(function(id, done){
	return done(null, {username: 'Niclas'});
});

exports.authenticate = function(req, res, next){
	if(req.isAuthenticated()) return next();
	next(new Error(401));
};