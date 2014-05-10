(function() {
  var ObjectId, SALT_ROUNDS, Schema, bcrypt, mongoose, userSchema;

  mongoose = require('mongoose');

  bcrypt = require('bcrypt');

  SALT_ROUNDS = 10;

  Schema = mongoose.Schema;

  ObjectId = Schema.Types.ObjectId;

  userSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    admin: {
      type: Boolean,
      required: true,
      "default": false
    }
  });

  userSchema.pre('save', function(next) {
    if (!user.isModified('password')) {
      return next();
    }
    return bcrypt.genSalt(SALT_ROUNDS, (function(_this) {
      return function(err, salt) {
        if (err) {
          return next(err);
        }
        return bcrypt.hash(_this.password, salt, function(err, hash) {
          if (err) {
            return next(err);
          }
          _this.password = hash;
          return next();
        });
      };
    })(this));
  });

  userSchema.methods.comparePassword = function(providedPassword, next) {
    return bcrypt.compare(providedPassword, this.password, function(err, isMatch) {
      if (err) {
        return next(err);
      }
      return next(null, isMatch);
    });
  };

  exports.User = mongoose.model('User', userSchema);

}).call(this);
