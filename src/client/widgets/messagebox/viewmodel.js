define(['durandal/app', 'knockoutEs5'], function (app, ko) {
  var MessageBox = function(body, title, options){
    this.body = body;
    this.title = title;
    this.options = options;

    ko.track(this);
  };
  
  MessageBox.prototype.show = function () {

  };
  
  return MessageBox;
});