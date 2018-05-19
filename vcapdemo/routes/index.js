var express = require('express');
var router = express.Router();

var cfInfo = require('../lib/cfenvhelper');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'CF Environment Variable Demo', info: cfInfo });
});

module.exports = router;