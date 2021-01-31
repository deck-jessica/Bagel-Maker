var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var bagel = require("../models/bagel.js");

router.get("/", function(req, res) {
    bagel.selectAll(function(data) {
      var bagelsObject = {
        bagels: data
      };
      console.log(bagelsObject);
      res.render("index", bagelsObject);
    });
  });
  
  router.post("/api/bagels", function(req, res) {
    bagel.createOne([
      "name", "devoured"
    ], [
      req.body.name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/bagels/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    bagel.updateOne({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;