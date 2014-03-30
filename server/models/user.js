var mongoose = require('mongoose'),
		bcrypt = require('bcrypt'),
		SALT_ROUNDS = 10;

var Schema = mongoose.Schema,
		ObjectId = Schema.Types.ObjectId;

var userSchema = new Schema({
	username : {type: String, required: true, unique: true},
	email : {type: String, required: true, unique: true},
	password: {type: String, required: true},
	admin: {type: Boolean, required: true, default: false}
});

userSchema.pre('save', function(next){
	var user = this;

	if(!user.isModified('password'))
		return next();

	bcrypt.genSalt(SALT_ROUNDS, function(err, salt){
		if(err) return next(err);

		bcrypt.hash(user.password, salt, function(err, hash){
			if(err) return next(err);

			user.password = hash;
			next();
		})
	})
});

userSchema.methods.comparePassword = function(providedPassword, cb){
	bcrypt.compare(providedPassword, this.password, function(err, isMatch){
		if(err) return cb(err);
		cb(null, isMatch);
	})
};

var userModel = mongoose.model('User', userSchema);

exports.User = userModel;