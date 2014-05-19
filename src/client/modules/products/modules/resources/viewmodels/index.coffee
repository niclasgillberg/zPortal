define ['knockoutEs5'], (ko) ->
  class ResourcesViewModel

    constructor: ->
      @resources = []

      ko.track @