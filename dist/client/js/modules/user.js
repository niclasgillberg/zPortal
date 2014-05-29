(function() {
  var MessageSvc, MessagesCtrl, UserInfoCtrl, app;

  app = angular.module('user', []);

  app.controller('user.MessagesCtrl', [
    'MessageSvc', MessagesCtrl = (function() {
      function MessagesCtrl() {}

      MessagesCtrl.prototype.contructor = function(messageSvc) {
        return this.messages = messageSvc.getMessages();
      };

      return MessagesCtrl;

    })()
  ]);

  app.controller('user.UserInfoCtrl', [
    'MessageSvc', UserInfoCtrl = (function() {
      function UserInfoCtrl(messageSvc) {
        this.name = 'Tony Stark';
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
            from: 'Thor',
            type: 'message',
            content: 'Can I borrow your reactor? I need to charge my hammer...'
          }
        ];
      };

      return MessageSvc;

    })()
  ]);

}).call(this);
