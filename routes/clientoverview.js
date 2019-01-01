var express = require('express');
var router = express.Router();

const sampleClient = require("../sampleClient.json")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('clientOverview', { title: 'Express' , client: sampleClient});
});

module.exports = router;
