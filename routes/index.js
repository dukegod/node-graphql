var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',  (req, res, next) => {
  res.render('index', {
    title: 'Express Graphql Pro'
  });
});

router.get('/user',  (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;
