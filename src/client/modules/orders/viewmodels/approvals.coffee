define ['knockoutEs5'], (ko) ->
  class ApprovalsViewModel
    constructor: ->
      @approvals = []

      ko.track @