
/**
 * Module dependencies.
 */

module.exports = {
	initialize: initialize
}

function initialize() {

	var express = require('express');
	var routes = require('./routes/index');
	var user = require('./routes/user');
	var http = require('http');
	var path = require('path');
	var passport = require('passport');
	require('./config/db');
	require('./config/auth');

	var app = express();

// all environments
	app.set('port', process.env.PORT || 3000);
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.json());
	app.use(express.urlencoded());
	app.use(express.methodOverride());
	app.use(express.cookieParser('your secret here'));
	app.use(express.session());
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, '../../public')));
	app.use('/vendor', express.static(path.join(__dirname, '../../vendor')));

	app.use(function (err, req, res, next) {
		if (err instanceof Error) {
			if (err.message === '401' && req.method === 'GET') {
				res.redirect('/login');
			} else{
				console.log('Something wnt wrong: ' + err);
				res.send(401, 'Unauthenticated');
			}
		}
	});

// development only
	if ('development' == app.get('env')) {
		app.use(express.errorHandler());
	}

	require('./routes/index').initialize(app);
	require('./routes/auth').initialize(app);


	http.createServer(app).listen(app.get('port'), function () {
		console.log('Express server listening on port ' + app.get('port'));
	});

}