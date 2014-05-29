(function() {
  var app;

  app = angular.module('application', ['ngSanitize', 'user', 'mm.foundation']);

  app.controller('ApplicationCtrl', [
    function() {
      return this.title = "zPortal";
    }
  ]);

}).call(this);
