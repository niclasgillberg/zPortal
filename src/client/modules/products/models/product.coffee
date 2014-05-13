define ['knockoutEs5', '../../../models/base'], (ko, BaseModel) ->
  class Product extends BaseModel
    @type = Product
    @resource = 'product'

    constructor: (values) ->
      @name = "A product called '#{values.name}'"
      @type = values.type
      ko.track @


