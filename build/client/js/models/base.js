(function() {
  define(function() {
    var BaseModel;
    return BaseModel = (function() {
      function BaseModel() {}

      BaseModel.all = function() {
        return [
          new this.type({
            name: "dsa",
            type: 1
          }), new this.type({
            name: 'asd',
            type: 2
          })
        ];
      };

      return BaseModel;

    })();
  });

}).call(this);
