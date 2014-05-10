define ['dirandal/app', 'knockoutEs5'], (app, ko) ->
  class Dashboard
    constructor: ->
      @boards = ['test','asd']

      ko.track @

    addBoard: ->
      @boards.push 'dsa'
      app.showMessage 'Hello dialog'
      return