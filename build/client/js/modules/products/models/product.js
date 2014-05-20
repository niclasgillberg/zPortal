(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['knockoutEs5', '../../../models/base'], function(ko, BaseModel) {
    var Product;
    return Product = (function(_super) {
      __extends(Product, _super);

      Product.type = Product;

      Product.resource = 'product';

      function Product(values) {
        this.name = "A product called '" + values.name + "'";
        this.type = values.type;
        ko.track(this);
      }

      return Product;

    })(BaseModel);
  });

}).call(this);
