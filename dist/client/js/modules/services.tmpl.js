angular.module('services').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('services/index.html',
    "<div>These are the services</div>"
  );

}]);
