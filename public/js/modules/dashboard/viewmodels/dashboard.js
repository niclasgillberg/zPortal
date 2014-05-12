(function() {
  define(['durandal/app', 'knockoutEs5'], function(app, ko) {
    var Dashboard;
    return Dashboard = (function() {
      function Dashboard() {
        this.message = 'Hello, and welcome to zPortal!';
        ko.track(this);
      }

      return Dashboard;

    })();
  });

}).call(this);
