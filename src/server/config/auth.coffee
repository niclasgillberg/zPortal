passport = require 'passport'
LocalStrategy = (require 'passport-local').Strategy
User = (require '../models/user').User

passport.use new LocalStrategy (username, password, done) ->
  console.log 'Authenticating...'

  User.findOne {username: username}, (err, user) ->
    return done err if err
    return done null, false, message:'Invalid credentials' unless user

    user.comparePassword password, (err, isMatch) ->
      return done err if err
      return done null, user if isMatch
      return done null, false, message: 'Invalid credentials'

passport.serializeUser (user, done) ->
  return done null, user._id

passport.deserializeUser (id, done) ->
  User.findOne {_id: id}, (err, user) ->
    return done err if err
    return done null, false, message: 'Invalid user' unless user
    return done null, user

exports.authenticate = (req, res, next) ->
  return next() if req.isAuthenticated()
  next new Error 401