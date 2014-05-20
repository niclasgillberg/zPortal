(function() {
  define(['knockoutEs5'], function(ko) {
    var UserInfo;
    return UserInfo = (function() {
      function UserInfo() {
        this.fullname = 'John Doe';
        this.messages = [];
        ko.track(this);
      }

      return UserInfo;

    })();
  });

}).call(this);
