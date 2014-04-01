var mongoose = require('mongoose');
exports.mongoose = mongoose;

var dbUri = process.env.MONGO_URI || 'mongodb://localhost/crello';
var mongoOptions = {db: {safe:true}};

mongoose.connect(dbUri, mongoOptions, function(err, res){
	if(err)
		console.log("ERROR connection to: " + dbUri + '. ' + err);
	else
		console.log('Successfully connected to: ' + dbUri);
});


