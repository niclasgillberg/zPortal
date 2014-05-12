(function() {
  var MongoStore, app, db, express, http, passport, path, user;

  express = require('express');

  user = require('./routes/user');

  http = require('http');

  path = require('path');

  passport = require('passport');

  MongoStore = (require('connect-mongo'))(express);

  db = require('./config/db');

  require('./config/auth');

  app = express();

  app.set('port', process.env.PORT || 3000);

  app.set('views', path.join(__dirname, 'views'));

  app.set('view engine', 'jade');

  app.use(express.favicon());

  app.use(express.logger('dev'));

  app.use(express.json());

  app.use(express.urlencoded());

  app.use(express.methodOverride());

  app.use(express.cookieParser('zPortal_53CR37'));

  app.use(express.session({
    secret: 'zPortal 53CR37',
    cookie: {
      maxAge: 3600000
    },
    store: new MongoStore({
      mongoose_connection: db.mongoose.connections[0],
      db: db.mongoose.db
    })
  }));

  app.use(passport.initialize());

  app.use(passport.session());

  app.use(app.router);

  app.use(express["static"](path.join(__dirname, '../../public')));

  app.use('/vendor', express["static"](path.join(__dirname, '../../vendor')));

  app.use(function(err, req, res, next) {
    if (err instanceof Error) {
      if (err.message === '401' && req.method === 'GET') {
        return res.redirect('/login');
      } else if (err.message === '401') {
        console.log('Something went wrong: ' + err);
        return res.send(401, 'Unauthenticated');
      }
    }
  });

  if ((app.get('env')) === 'development') {
    app.use(express.errorHandler());
  }

  (require('./routes/index')).initialize(app);

  (require('./routes/auth')).initialize(app);

  (http.createServer(app)).listen(app.get('port'), function() {
    return console.log('Express server for zPortal is listening on port ' + app.get('port'));
  });

}).call(this);
