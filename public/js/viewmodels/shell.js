define(['plugins/router'], function(router){
	return {
		activate: function(){
			router.map([
				{route: '', title: 'Dashboard', moduleId: 'viewmodels/dashboard', nav: 1}
			]).buildNavigationModel();

			return router.activate();
		},
		router: router
	};
});