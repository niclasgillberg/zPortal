angular.module('application').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('application/application.html',
    "<div class=\"inner-wrap\" ng-controller=\"ApplicationCtrl as app\">\n" +
    "  <nav class=\"top-bar\">\n" +
    "    <ul class=\"title-area\">\n" +
    "      <li class=\"name\">\n" +
    "        <h1><a href=\"#\">{{app.title}}</a></h1>\n" +
    "      </li>\n" +
    "      <li class=\"toggle-topbar menu-icon\">\n" +
    "        <a href=\"#\">Menu</a>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "    <section class=\"top-bar-section\">\n" +
    "      <ng-include src=\"'user/userinfo.html'\" class=\"right\"></ng-include>\n" +
    "    </section>\n" +
    "  </nav>\n" +
    "\n" +
    "  <aside class=\"right-off-canvas-menu\">\n" +
    "    <ng-include src=\"'user/messages-panel.html'\"></ng-include>\n" +
    "  </aside>\n" +
    "\n" +
    "  <section class=\"main-section\">\n" +
    "    <h1>{{app.title}}</h1>\n" +
    "  </section>\n" +
    "\n" +
    "  <a class=\"exit-off-canvas\"></a>\n" +
    "</div>\n"
  );

}]);
