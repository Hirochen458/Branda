const express = require("express");
const router = express.Router();
let Ship = require("../models/Ship");

router.patch("/updateShip/", (req,res)=>{
  //res.send(req.body.name);
  Ship.findOneAndUpdate({name: req.body.name}, {launched: "04/28/2022"}, {
    new: true
  }, function(error, doc){
    if(error){
      console.error("Error finding ship",error);
      res.status(500).send(error);
    }
    else if(!doc){
      res.status(404).send("sorry ship is not found");
    }
    else if(req.body.name == null){
      res.status(400).send("no ship name is given");
    }
    else{

      res.send(doc);
    }
  });
});

module.exports = router;