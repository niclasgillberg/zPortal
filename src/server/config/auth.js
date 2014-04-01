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
	return done(null, user._id);
});
passport.deserializeUser(function(id, done){
	User.findOne({_id: id}, function(err, user){
		if(err) return done(err);
		if(!user) return done(null, false, {message: 'User invalid'});

		return done(null, user);
	});
});

exports.authenticate = function(req, res, next){
	if(req.isAuthenticated()) return next();
	next(new Error(401));
};