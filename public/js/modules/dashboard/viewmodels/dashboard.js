(function() {
  define(['durandal/app', 'knockoutEs5'], function(app, ko) {
    var Dashboard;
    return Dashboard = (function() {
      function Dashboard() {
        this.boards = ['test', 'asd'];
        ko.track(this);
      }

      Dashboard.prototype.addBoard = function() {
        this.boards.push('dsa');
        app.showMessage('Hello dialog');
      };

      return Dashboard;

    })();
  });

}).call(this);
