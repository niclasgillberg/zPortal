define ['knockoutEs5'], (ko) ->
  class Product
    constructor: (name, type) ->
      @name = name
      @type = type

      ko.track @


    # Static methods

    @all: ->
      products = []
      for i in [1..10]
        products.push new Product "Product #{i}", 1
      products