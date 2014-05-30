angular.module('application').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('application/application.html',
    "<div class=\"inner-wrap\" ng-controller=\"ApplicationCtrl as app\">\n" +
    "  <nav class=\"top-bar\">\n" +
    "    <ul class=\"title-area\">\n" +
    "      <li class=\"name\">\n" +
    "        <h1><a ui-sref=\"home\">{{app.title}}</a></h1>\n" +
    "      </li>\n" +
    "      <li class=\"toggle-topbar menu-icon\">\n" +
    "        <a href=\"#\">Menu</a>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "    <section class=\"top-bar-section\">\n" +
    "      <ul class=\"left\">\n" +
    "        <li class=\"divider\"></li>\n" +
    "        <li>\n" +
    "          <a ui-sref=\"products\">Products</a>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <a ui-sref=\"services\">Services</a>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <a ui-sref=\"resources\">Resources</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "      <ng-include src=\"'user/userinfo.html'\" class=\"right\"></ng-include>\n" +
    "      <ul class=\"right\">\n" +
    "        <li>\n" +
    "          <a ui-sref=\"history\">History</a>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <a ui-sref=\"approvals\">My Approvals</a>\n" +
    "        </li>\n" +
    "        <li class=\"divider\"></li>\n" +
    "      </ul>\n" +
    "    </section>\n" +
    "  </nav>\n" +
    "\n" +
    "  <aside class=\"right-off-canvas-menu\">\n" +
    "    <ng-include src=\"'user/messages-panel.html'\"></ng-include>\n" +
    "  </aside>\n" +
    "\n" +
    "  <section class=\"main-section\" ui-view>\n" +
    "  </section>\n" +
    "\n" +
    "  <a class=\"exit-off-canvas\"></a>\n" +
    "</div>\n"
  );

}]);
