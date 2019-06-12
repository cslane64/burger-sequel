var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
       cb(res);
      })
    },

    update: function(condition, cb) {
      orm.update("burgers", condition, function(res) {
        console.log("burger.js condition " + condition);
       cb(res);
     });
    },
    // The variables cols and vals are arrays.
    insertOne: function(vals, cb) {
      orm.insertOne("burgers", vals, function(res) {
        cb(res);
      });
    },
    
};
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
   