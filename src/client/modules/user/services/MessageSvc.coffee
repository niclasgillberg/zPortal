app.service 'MessageSvc', [
  class MessageSvc
    constructor: () ->

    getMessages: () ->
      [
        from: 'Jane Doe'
        type: 'message'
        content: 'Who are you?'
      ]
]