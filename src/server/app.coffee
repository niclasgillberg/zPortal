express = require 'express'
path = require 'path'
http = require 'http'
favicon = require 'static-favicon'
logger = require 'morgan'
cookieParser = require 'cookie-parser'
bodyParser = require 'body-parser'

app = express()

app.set 'port', process.env.PORT || 3000
app.set 'views', path.join __dirname, 'views'
app.set 'view engine', 'jade'

app.use favicon()
app.use logger 'dev'
app.use bodyParser.json()
app.use bodyParser.urlencoded()
app.use cookieParser()
app.use express.static path.join __dirname, '../client'
app.use '/vendor', express.static path.join __dirname, '../../vendor'

app.get '/', (req, res) ->
  res.render 'index'

app.use (req, res, next) ->
  err = new Error 'Not Found'
  err.status = 404
  next err

if app.get('env') is 'developement'
  app.use (err, req, res, next) ->
    res.status(err.status || 500)
    res.render 'error',
      message: err.message
      error: err

if app.get('env') is 'developement'
  app.use (err, req, res, next) ->
    res.status(err.status || 500)
    res.render 'error',
      message: err.message
      error: {}

server = app.listen app.get('port'), ->
  console.log 'Express listening on port ' + app.get 'port'