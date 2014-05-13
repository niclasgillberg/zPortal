(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['knockoutEs5', '../../../models/base'], function(ko, BaseModel) {
    var Software;
    return Software = (function(_super) {
      __extends(Software, _super);

      Software.type = Software;

      Software.resource = 'software';

      function Software(_arg) {
        this.name = _arg.name, this.type = _arg.type;
        ko.track(this);
      }

      return Software;

    })(BaseModel);
  });

}).call(this);
