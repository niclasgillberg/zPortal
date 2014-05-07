var auth = require('../config/auth');

exports.initialize = function(app){
	app.get('/', function(req, res){
		res.render('index', { title: 'Express' });
	});
};