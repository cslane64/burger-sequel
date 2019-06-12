var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

//selectAll()
router.get("/", function(req, res) {
    burger.all(function(data){
      var hbsObject = {
       burgers: data
       };
      console.log(hbsObject);
      res.render("index", hbsObject);
    })
  });
//updateOne
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update(req.params.id, function(result) {
        console.log(result);
        //res.redirect('/');
        res.json(result);
    });
  });
  

  //insertOne
  router.post("/burgers/create", function(req, res) {
    burger.insertOne(req.body.burger_name, function(result) {
      
      res.redirect('/');
   });
  });
  



module.exports = router;