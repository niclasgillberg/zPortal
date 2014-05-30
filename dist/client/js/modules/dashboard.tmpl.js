angular.module('dashboard').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('dashboard/index.html',
    "<div>This is the dashboard</div>"
  );

}]);
