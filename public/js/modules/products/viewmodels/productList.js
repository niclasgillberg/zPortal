(function() {
  define(['knockoutEs5'], function(ko) {
    var ProductListViewModel;
    return ProductListViewModel = (function() {
      function ProductListViewModel() {
        this.products = [];
        ko.track(this);
      }

      return ProductListViewModel;

    })();
  });

}).call(this);
