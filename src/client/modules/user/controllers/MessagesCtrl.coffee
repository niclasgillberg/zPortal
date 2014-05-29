app.controller 'user.MessagesCtrl', [
  'MessageSvc'
  class MessagesCtrl
    contructor: (messageSvc) ->
      @messages = messageSvc.getMessages()
]