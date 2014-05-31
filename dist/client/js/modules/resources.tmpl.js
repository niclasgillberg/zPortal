angular.module('resources').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('resources/index.html',
    "<div>These are the resources</div>"
  );

}]);
