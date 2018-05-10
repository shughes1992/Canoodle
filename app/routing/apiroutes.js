var data = require("../data/canoodle");

var express = require("express");

var router = express.Router();

router.get("/canoodlers", function(req, res){
    res.send(data)
})

module.exports = router;