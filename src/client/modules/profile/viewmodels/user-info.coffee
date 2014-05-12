define ['knockoutEs5'], (ko) ->
  class UserInfo
    constructor: ->
      @fullname = 'John Doe'
      @messages = []

      ko.track @