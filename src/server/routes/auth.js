var passport = require('passport');
var auth = require('../config/auth');
var User = require('../models/user').User;

exports.initialize = function initialize(app){
	app.get('/login', function(req, res){
		res.render('login');
	});

	app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));

	app.get('/logout', auth.authenticate, function(req,res){
		req.logout();
		res.redirect('/login');
	});

	app.get('/register', function(req, res){
		res.render('register');
	});

	app.post('/register', function(req, res){
		console.log('Registering ' + req.body.username);
		var userexists = User.findOne({username: req.body.username}, function(err, user){
			console.log('Error: ' + err);
			if(err) throw new Error(500);

			console.log('User: ' + user);
			if(user)
				throw new Error(409);

			var user = new User({
				username: req.body.username,
				email: req.body.email,
				password: req.body.password
			});
			user.save(function(err, user){
				console.log(err);
				if(err) throw new Error(500);

				res.redirect('/login');
			});
		});
	});
};