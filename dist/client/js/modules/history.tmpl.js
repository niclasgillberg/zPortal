angular.module('history').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('history/index.html',
    "<div>This is the history</div>"
  );

}]);
