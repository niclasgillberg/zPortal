(function() {
  define(['plugins/router', 'knockoutEs5', '../models/product', '../models/software'], function(router, ko, Product, Software) {
    var ProductModule;
    return ProductModule = (function() {
      function ProductModule() {
        this.products = Product.all();
        this.software = Software.all();
        ko.track(this);
      }

      ProductModule.prototype.activate = function() {};

      return ProductModule;

    })();
  });

}).call(this);
