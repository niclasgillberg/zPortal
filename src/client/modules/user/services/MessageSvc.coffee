app.service 'MessageSvc', [
  class MessageSvc
    constructor: () ->

    getMessages: () ->
      [
        from: 'Thor'
        type: 'message'
        content: 'Can I borrow your reactor? I need to charge my hammer...'
      ]
]