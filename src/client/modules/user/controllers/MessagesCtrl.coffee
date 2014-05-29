app.controller 'user.MessagesCtrl', [
  'MessageSvc'
  class MessagesCtrl
    constructor: (messageSvc) ->
      @messages = messageSvc.getMessages()
]