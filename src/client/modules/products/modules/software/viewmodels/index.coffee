define ['knockoutEs5'], (ko) ->
  class SoftwareViewModel

    constructor: ->
      @software = []

      ko.track @