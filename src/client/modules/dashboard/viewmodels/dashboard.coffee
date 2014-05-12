define ['durandal/app', 'knockoutEs5'], (app, ko) ->
  class Dashboard
    constructor: ->
      @message = 'Hello, and welcome to zPortal!'

      ko.track @
