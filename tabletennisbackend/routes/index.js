var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let NewsItem = mongoose.model('NewsItem');


router.get('/API/news/', function(req, res, next){
  NewsItem.find(function(err, news){
    if (err) { return next(err); }
    res.json(news);
  });
});

router.post('/API/news/', function(req, res, next){
let newsitem = new NewsItem(req.body);
newsitem.save(function(err, rec){
  if(err){return next(err);}
  res.json(rec);
  });
});

// catch 404
/*app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});*/

module.exports = router;
