var express = require("express");
var router = express.Router();
var config = require("../config");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", {
    partnerName: config.partnerName,
    domain: config.domain,
    partnerKey: config.partnerKey
  });
});

module.exports = router;
