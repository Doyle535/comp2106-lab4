var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/megan', function(req,res,next){
  res.render('megan', {title: 'Megan'});
});
router.get('/erin', function(req,res,next){
  res.render('erin', {title: 'Erin'});
});
router.get('/raimo', function(req,res,next){
  res.render('raimo', {title: 'Raimo'});
});
router.get('/flo', function(req,res,next){
  res.render('flo', {title: 'Flo'});
});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
