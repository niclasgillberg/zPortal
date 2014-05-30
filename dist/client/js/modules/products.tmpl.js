angular.module('products').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('products/index.html',
    "<div>This is the product page</div>"
  );

}]);
