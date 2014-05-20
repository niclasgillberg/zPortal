(function() {
  define(['knockoutEs5'], function(ko) {
    var ApprovalsViewModel;
    return ApprovalsViewModel = (function() {
      function ApprovalsViewModel() {
        this.approvals = [];
        ko.track(this);
      }

      return ApprovalsViewModel;

    })();
  });

}).call(this);
