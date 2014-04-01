define(['plugins/router', 'bootstrap', 'jquery'], function(router, bootstrap, $){
	return {
		activate: function(){
			router.map([
				{route: '', title: 'Dashboard', moduleId: 'viewmodels/dashboard'},
				{route: 'boards', title: 'Boards', moduleId: 'viewmodels/boards', nav: 1}
			]).buildNavigationModel();

			return router.activate();
		},
		router: router,
		attached: function(view){
			var group = $(view).find('.navbar-form[role="search"] .input-group');
			group.find('input').on('focus', function(){
				group.addClass('focused');
			}).on('blur', function(){
				group.removeClass('focused');
			});
		},
		logout: function(){
			window.location = '/logout';
		}
	};
});