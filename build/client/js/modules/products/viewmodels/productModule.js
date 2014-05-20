(function() {
  define(['plugins/router', 'knockoutEs5', '../models/product', '../models/software'], function(router, ko, Product, Software) {
    var ProductModule;
    return ProductModule = (function() {
      function ProductModule() {
        this.router = router.createChildRouter().makeRelative({
          moduleId: 'products',
          fromParent: true
        }).map([
          {
            route: '',
            moduleId: '../modules/products/viewmodels/overview',
            title: 'Products',
            nav: 0
          }, {
            route: 'hardware',
            moduleId: '../modules/products/modules/hardware/viewmodels/index',
            title: 'Hardware',
            icon: 'fa-laptop',
            nav: 1
          }, {
            route: 'resources',
            moduleId: '../modules/products/modules/resources/viewmodels/index',
            title: 'Resources',
            icon: 'fa-user',
            nav: 2
          }, {
            route: 'services',
            moduleId: '../modules/products/modules/services/viewmodels/index',
            title: 'Services',
            icon: 'fa-truck',
            nav: 3
          }, {
            route: 'software',
            moduleId: '../modules/products/modules/software/viewmodels/index',
            title: 'Software',
            icon: 'fa-terminal',
            nav: 4
          }
        ]).buildNavigationModel();
        ko.track(this);
      }

      ProductModule.prototype.activate = function() {};

      return ProductModule;

    })();
  });

}).call(this);
