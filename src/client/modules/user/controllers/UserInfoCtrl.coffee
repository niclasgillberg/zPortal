app.controller 'user.UserInfoCtrl', [
  'MessageSvc'
  class UserInfoCtrl
    constructor: (messageSvc) ->
      @name = 'Tony Stark'
      @messages = messageSvc.getMessages()
]