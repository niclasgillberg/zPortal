app.controller 'user.UserInfoCtrl', [
  'MessageSvc'
  class UserInfoCtrl
    constructor: (messageSvc) ->
      @name = 'John Doe'
      @messages = messageSvc.getMessages()
]