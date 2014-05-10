auth = require '../config/auth'

exports.initialize = (app) ->
  app.get '/', (req, res) ->
    res.render 'index', title: 'Express'