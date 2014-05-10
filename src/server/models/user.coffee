mongoose = require 'mongoose'
bcrypt = require 'bcrypt'
SALT_ROUNDS = 10

Schema = mongoose.Schema
ObjectId = Schema.Types.ObjectId

userSchema = new Schema
  username:
    type: String
    required: true
    unique: true
  email:
    type: String
    required: true
    unique: true
  password:
    type: String
    required: true
  admin:
    type: Boolean
    required: true
    default: false

userSchema.pre 'save', (next) ->
  return next() unless user.isModified 'password'

  bcrypt.genSalt SALT_ROUNDS, (err, salt) =>
    return next err if err

    bcrypt.hash @password, salt, (err, hash) =>
      return next err if err

      @password = hash
      next()

userSchema.methods.comparePassword = (providedPassword, next) ->
  bcrypt.compare providedPassword, @password, (err, isMatch) ->
    return next err if err

    next null, isMatch

exports.User = mongoose.model 'User', userSchema