(function() {
  define(['knockoutEs5', '../models/product'], function(ko, Product) {
    var ProductOverviewViewModel;
    return ProductOverviewViewModel = (function() {
      function ProductOverviewViewModel() {
        this.products = Product.all();
        ko.track(this);
      }

      return ProductOverviewViewModel;

    })();
  });

}).call(this);
