(function() {
  define(['knockoutEs5'], function(ko) {
    var Product;
    return Product = (function() {
      function Product(name, type) {
        this.name = name;
        this.type = type;
        ko.track(this);
      }

      Product.all = function() {
        var i, products, _i;
        products = [];
        for (i = _i = 1; _i <= 10; i = ++_i) {
          products.push(new Product("Product " + i, 1));
        }
        return products;
      };

      return Product;

    })();
  });

}).call(this);
