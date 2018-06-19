var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<b>Book invoked! </b>sa');
});

module.exports = router;
