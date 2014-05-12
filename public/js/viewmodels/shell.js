(function() {
  define(['plugins/router', 'bootstrap', 'jquery'], function(router, bootstrap, $) {
    return {
      activate: function() {
        return (router.map([
          {
            route: '',
            title: 'Dashboard',
            moduleId: 'modules/dashboard/viewmodels/dashboard'
          }, {
            route: 'products',
            title: 'Products',
            moduleId: 'modules/products/viewmodels/productModule',
            nav: 1
          }, {
            route: 'approvals',
            title: 'Approvals',
            moduleId: 'modules/orders/viewmodels/approvals',
            nav: 2
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
