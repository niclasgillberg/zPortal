mongoose = require 'mongoose'
exports.mongoose = mongoose

dbUri = process.env.MONGO_URI || 'mongodb://localhost/zPortal'
mongoOptions =
  db:
    safe: true

mongoose.connect dbUri, mongoOptions, (err, res) ->
  if err
    console.log 'ERROR connection to: ' + dbUri + '. ' + err
  else
    console.log 'Successfully connected to: ' + dbUri


