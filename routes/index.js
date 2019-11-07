var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cameron Massey' });
});

/* GET blog page. */
router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Cameron Massey' });
});

module.exports = router;
