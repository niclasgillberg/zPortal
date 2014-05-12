(function() {
  define(['plugins/router', 'knockoutEs5', '../models/product'], function(router, ko, Product) {
    var ProductModule;
    return ProductModule = (function() {
      function ProductModule() {
        this.products = Product.all();
        ko.track(this);
      }

      ProductModule.prototype.activate = function() {};

      return ProductModule;

    })();
  });

}).call(this);
