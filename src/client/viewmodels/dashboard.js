define(['knockout'], function(ko){
	var Dashboard = function(){
		this.organizations = ko.observableArray();
	};

	return Dashboard;
})