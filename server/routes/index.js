var auth = require('../config/auth');

exports.initialize = function(app){
	app.get('/', auth.authenticate, function(req, res){
		res.render('index', { title: 'Express' });
	});
};