var orm = require("../config/orm.js");

var bagel = {
    selectAll: function(cb) {
        orm.selectAll("bagels", function(res) {
          cb(res);
        });
      },
      insertOne: function(cols, vals, cb) {
        orm.insertOne("bagels", cols, vals, function(res) {
          cb(res);
        });
      },
      updateOne: function(objColVals, condition, cb) {
        orm.updateOne("bagels", objColVals, condition, function(res) {
          cb(res);
        });
      },
};

module.exports = bagel;