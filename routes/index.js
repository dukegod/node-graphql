var express = require('express');
var router = express.Router();

const helloGl = require('./hello')

/* GET home page. */
router.get('/',  (req, res, next) => {
  console.log(req.cookies)
  res.render('index', {
    title: 'Express Graphql Pro'
  });
});

router.get('/hello',  (req, res, next) => {
  // console.log(helloGl);
  let title;
  helloGl.then(re => {
    title = re.data.hello;
    console.log(title);
    res.render('index', {
      title: title
    });
  }, err => {
    title = 'hellllllll'
  })


});


router.get('/user',  (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;
