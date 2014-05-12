(function() {
  var dbUri, mongoOptions, mongoose;

  mongoose = require('mongoose');

  exports.mongoose = mongoose;

  dbUri = process.env.MONGO_URI || 'mongodb://localhost/zPortal';

  mongoOptions = {
    db: {
      safe: true
    }
  };

  mongoose.connect(dbUri, mongoOptions, function(err, res) {
    if (err) {
      return console.log('ERROR connection to: ' + dbUri + '. ' + err);
    } else {
      return console.log('Successfully connected to: ' + dbUri);
    }
  });

}).call(this);
