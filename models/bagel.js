var orm = require("../config/orm.js");

var bagel = {
    selectAll: function(cb) {
        orm.all("bagels", function(res) {
          cb(res);
        });
      },
      insertOne: function(cols, vals, cb) {
        orm.create("bagels", cols, vals, function(res) {
          cb(res);
        });
      },
      updateOne: function(objColVals, condition, cb) {
        orm.update("bagels", objColVals, condition, function(res) {
          cb(res);
        });
      },
};

module.exports = bagel;