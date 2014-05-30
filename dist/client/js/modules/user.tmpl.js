angular.module('user').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('user/messages-panel.html',
    "<ul class=\"off-canvas-list messages\" ng-controller=\"user.MessagesCtrl as model\">\n" +
    "  <li><label>Messages</label></li>\n" +
    "  <li ng-repeat=\"message in model.messages\">\n" +
    "    <div class=\"{{message.type}}\">\n" +
    "      <a href=\"#\">{{message.from}}</a>\n" +
    "      <div class=\"content\">\n" +
    "        {{message.content}}\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </li>\n" +
    "</ul>"
  );


  $templateCache.put('user/profile.html',
    "<div>This is the profile</div>"
  );


  $templateCache.put('user/userinfo.html',
    "<div class=\"user-info\" ng-controller=\"user.UserInfoCtrl as userinfo\">\n" +
    "  <div class=\"username\">{{userinfo.name}}</div>\n" +
    "  <div class=\"messages\">\n" +
    "    <a href=\"#\" class=\"right-off-canvas-toggle\">\n" +
    "      <span class=\"fa fa-envelope\"></span>{{userinfo.messages.length}}\n" +
    "    </a>\n" +
    "  </div>\n" +
    "</div>"
  );

}]);
