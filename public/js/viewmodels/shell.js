define(['plugins/router', 'bootstrap', 'jquery'], function(router, bootstrap, $){
	return {
		activate: function(){
			router.map([
				{route: '', title: 'Dashboard', moduleId: 'viewmodels/dashboard', nav: 1}
			]).buildNavigationModel();

			return router.activate();
		},
		router: router,
		attached: function(view){
			var group = $('.navbar-form[role="search"] .input-group');
			group.find('input').on('focus', function(){
				group.addClass('focused');
			}).on('blur', function(){
				group.removeClass('focused');
			});
		}
	};
});