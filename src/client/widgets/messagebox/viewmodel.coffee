define ['durandal/app', 'knockoutEs5'], (app, ko) ->
  class MessageBox
    constructor: (body, title, options) ->
      @body = body
      @title = title
      @options = options

      ko.track @

    show: ->
