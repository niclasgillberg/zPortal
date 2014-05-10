passport = require 'passport'
auth = require '../config/auth'
User = require '../models/user'

exports.initialize = (app) ->
  app.get '/login', (req, res) ->
    res.render 'login'

  app.post '/login', passport.authenticate 'local',
    successRedirect: '/'
    failureRedirect: '/login'

  app.get '/logout', auth.authenticate, (req, res) ->
    req.logout()
    res.redirect '/login'

  app.get '/register', (req, res) ->
    res.render 'register'

  app.post '/register', (req, res) ->
    console.log 'Registering ' + req.body.username

    userexists = User.findOne {username: req.body.username}, (err, user) ->
      throw new Error 500 if err
      throw new Error 409 if user

      user = new User
        username: req.body.username
        email: req.body.email
        password: req.body.password

      user.save (err, user) ->
        throw new Error 500 if err
        res.redirect '/login'