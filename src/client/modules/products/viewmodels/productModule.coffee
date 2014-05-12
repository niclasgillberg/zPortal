define ['plugins/router', 'knockoutEs5', '../models/product'], (router, ko, Product) ->
  class ProductModule
    constructor: ->
      @products = Product.all()

      ko.track @

    activate: ->
