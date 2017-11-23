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

router.param('newsitem', function(req, res, next, id) {
  let query = NewsItem.findById(id);
  query.exec(function (err, newsitem){
    if (err) { return next(err); }
    if (!newsitem) { return next(new Error('not found ' + id)); }
    req.newsitem = newsitem;
    return next();
  });
}); 

router.get('/API/news/newsitem/:newsitem', function(req, res) {
  res.json(req.newsitem);
});

router.delete('/API/news/newsitem/:newsitem', function(req, res, next) {
  req.newsitem.remove(function(err) {
    if (err) { return next(err); }   
    res.json("removed newsitem");
  });
})

// 

module.exports = router;
