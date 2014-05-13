define ['knockoutEs5', '../../../models/base'], (ko, BaseModel) ->
  class Software extends BaseModel
    @type = Software
    @resource = 'software'

    constructor: ({@name, @type}) ->
      ko.track @