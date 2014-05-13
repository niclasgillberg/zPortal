define ['plugins/router', 'knockoutEs5', '../models/product', '../models/software'], (router, ko, Product, Software) ->
  class ProductModule
    constructor: ->
      @products = Product.all()

      @software = Software.all()

      ko.track @

    activate: ->
