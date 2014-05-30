(function() {
  var MessageSvc, MessagesCtrl, UserInfoCtrl, app;

  app = angular.module('user', []);

  app.controller('user.MessagesCtrl', [
    'MessageSvc', MessagesCtrl = (function() {
      function MessagesCtrl(messageSvc) {
        this.messages = messageSvc.getMessages();
      }

      return MessagesCtrl;

    })()
  ]);

  app.controller('user.UserInfoCtrl', [
    'MessageSvc', UserInfoCtrl = (function() {
      function UserInfoCtrl(messageSvc) {
        this.name = 'John Doe';
        this.messages = messageSvc.getMessages();
      }

      return UserInfoCtrl;

    })()
  ]);

  app.service('MessageSvc', [
    MessageSvc = (function() {
      function MessageSvc() {}

      MessageSvc.prototype.getMessages = function() {
        return [
          {
            from: 'Jane Doe',
            type: 'message',
            content: 'Who are you?'
          }
        ];
      };

      return MessageSvc;

    })()
  ]);

}).call(this);
