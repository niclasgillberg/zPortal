express = require 'express'
user = require './routes/user'
http = require 'http'
path = require 'path'
passport = require 'passport'
MongoStore = (require 'connect-mongo')(express)
db = require './config/db'
require './config/auth'

app = express()

# All environments
app.set 'port', process.env.PORT || 3000
app.set 'views', path.join __dirname, 'views'
app.set 'view enging', 'jade'
app.use express.favicon()
app.use express.logger 'dev'
app.use express.json()
app.use express.urlencoded()
app.use express.methodOverride()
app.use express.cookieParser 'Crello_53CR37'
app.use express.session
  secret: 'Crello 53CR37'
  cookie:
    maxAge: 3600000
  store: new MongoStore
    mongoose_connection: db.mongoose.connections[0]
    db: db.mongoose.db
app.use passport.initialize()
app.use passport.session()
app.use app.router
app.use express.static path.join __dirname, '../../public'
app.use '/vendor', express.static path.join __dirname, '../../vendor'

app.use (err, req, res, next) ->
  if err instanceif Error
    if err.message is '401' and req.method is 'GET'
      res.redirect '/login'
    else if err.message is '401'
      console.log 'Something went wrong: ' + err
      res.send 401, 'Unauthenticated'

# Development environment only
app.use express.errorHandler() if (app.get 'env') is 'development'

(require './routes/index').initialize app
(require './routes/auth').initialize app

(http.createServer app).listen (app.get 'port'), ->
  console.log 'Express server for Crello is listening on port ' + app.get 'port'