angular.module('approvals').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('approvals/index.html',
    "<div>This is the approvals</div>"
  );

}]);
