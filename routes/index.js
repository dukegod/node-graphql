var express = require('express');
var router = express.Router();

const { 
  buildSchema, 
  graphql,
} = require('graphql');

const helloGl = require('./hello')
const schema = require('../schemas/schema.js')

/* GET home page. */
router.get('/',  (req, res, next) => {
  console.log(req.cookies)
  res.render('index', {
    title: 'Express Graphql Pro'
  });
});

router.get('/hello',  (req, res, next) => {
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

console.log(schema)

router.post('/languages',  (req, res, next) => {
  // console.log(req)
  // console.log(req.body)
  graphql(schema, '{languages { name }}')
  .then((result) => {
    res.send(JSON.stringify(result, null, 2));
  })
});

router.post('/commands',  (req, res, next) => {
  // console.log(req)
  // console.log(req.body)
  graphql(schema, '{commands { id }}')
  .then((result) => {
    res.send(JSON.stringify(result, null, 2));
  })
});



module.exports = router;
