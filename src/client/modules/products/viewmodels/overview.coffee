define ['durandal/app', 'knockoutEs5', '../models/product'], (app, ko, Product) ->
  class ProductOverviewViewModel
    constructor: ->
      @products = Product.all()
      @searchTerm = ''

      ko.track @

    search: ->
      app.showMessage "You searched for '#{@searchTerm}'. Unfortunately the search does not work yet :("
