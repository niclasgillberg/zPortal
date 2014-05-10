(function() {
  var auth;

  auth = require('../config/auth');

  exports.initialize = function(app) {
    return app.get('/', function(req, res) {
      return res.render('index', {
        title: 'Express'
      });
    });
  };

}).call(this);
