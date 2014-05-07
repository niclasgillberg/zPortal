define(['durandal/app', 'knockoutEs5'], function(app, ko, boardService){
	var Dashboard = function(){
		this.boards = ['test', 'asd'];

    ko.track(this);
	};

  Dashboard.prototype.addOrganization = function () {
    this.boards.push('dsa');
    app.showMessage('Hello Dialog');
  };

	return Dashboard;
})