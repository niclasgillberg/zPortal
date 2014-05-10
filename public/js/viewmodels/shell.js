(function() {
  define(['plugins/router', 'bootstrap', 'jquery'], function(router, bootstrap, $) {
    return {
      activate: function() {
        return (router.map([
          {
            route: '',
            title: 'Dashboard',
            moduleId: 'viewmodels/dashboard'
          }, {
            route: 'boards',
            title: 'Boards',
            moduleId: 'viewmodels/boards',
            nav: 1
          }
        ])).buildNavigationModel().activate();
      },
      router: router,
      attached: function(view) {
        var group;
        group = ($(view)).find('.navbar-form[role="search"] .input-group');
        return (group.find('input')).on('focus', function() {
          group.addClass('focused');
        }).on('blur', function() {
          group.removeClass('focused');
        });
      },
      logout: function() {
        return window.location = '/logout';
      }
    };
  });

}).call(this);
