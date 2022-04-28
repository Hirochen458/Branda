const express = require("express");
const router = express.Router();
let Ship = require("../models/Ship");

router.get("/getShip/:secondaryBattery([^/]+/[^/]+)", (req,res)=>{
  Ship.find({secondaryBattery: req.params.secondaryBattery}, function(error, doc){
    if(error){
      console.error("Error finding ship",error);
      res.status(500).send(error);
    }
    else if(!doc){
      res.status(404).send("sorry ship is not found");
    }
    else{
      res.send(doc);
    }
  });
});

module.exports = router;