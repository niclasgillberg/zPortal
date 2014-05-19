define ['knockoutEs5'], (ko) ->
  class ServicesViewModel

    constructor: ->
      @services = []

      ko.track @