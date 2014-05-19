(function() {
  define(['durandal/app', 'knockoutEs5', '../models/product'], function(app, ko, Product) {
    var ProductOverviewViewModel;
    return ProductOverviewViewModel = (function() {
      function ProductOverviewViewModel() {
        this.products = Product.all();
        this.searchTerm = '';
        ko.track(this);
      }

      ProductOverviewViewModel.prototype.search = function() {
        return app.showMessage("You searched for '" + this.searchTerm + "'. Unfortunately the search does not work yet :(");
      };

      return ProductOverviewViewModel;

    })();
  });

}).call(this);
