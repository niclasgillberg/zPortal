define ['knockoutEs5', '../models/product'], (ko, Product) ->
  class ProductOverviewViewModel
    constructor: ->
      @products = Product.all()

      ko.track @