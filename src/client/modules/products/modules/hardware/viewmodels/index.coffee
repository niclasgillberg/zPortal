define ['knockoutEs5'], (ko) ->
  class HardwareViewModel

    constructor: ->
      @hardware = []

      ko.track @