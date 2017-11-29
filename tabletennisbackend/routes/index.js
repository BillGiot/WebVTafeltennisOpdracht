var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');

let NewsItem = mongoose.model('NewsItem');
let Match = mongoose.model('Match');
let Serie = mongoose.model('Serie');
let Blog = mongoose.model('Blog');
let Post = mongoose.model('Post');

//Authorisatie 
let jwt = require('express-jwt');
let auth = jwt({secret: process.env.TABLETENNIS_BACKEND_SECRET, userProperty: 'payload'});

//news
router.get('/API/news/', function (req, res, next) {
  NewsItem.find(function (err, news) {
    if (err) { return next(err); }
    res.json(news);
  });
});

router.post('/API/news/', auth ,function (req, res, next) {
  let newsitem = new NewsItem(req.body);
  newsitem.save(function (err, rec) {
    if (err) { return next(err); }
    res.json(rec);
  });
});

router.param('newsitem', function (req, res, next, id) {
  let query = NewsItem.findById(id);
  query.exec(function (err, newsitem) {
    if (err) { return next(err); }
    if (!newsitem) { return next(new Error('not found ' + id)); }
    req.newsitem = newsitem;
    return next();
  });
});

router.get('/API/news/:newsitem', function (req, res) {
  res.json(req.newsitem);
});

router.delete('/API/news/:newsitem', auth, function (req, res, next) {
  req.newsitem.remove(function (err) {
    if (err) { return next(err); }
    res.json("removed newsitem");
  });
});

//series
router.get('/API/series/', function(req, res, next){
  let query = Serie.find().populate('matches');
  query.exec(function(err, series) {
    if (err) return next(err);
    res.json(series);
  });
});

router.post('/API/series/' , auth, function (req, res) {
  let serie = new Serie(req.body);
  serie.save(function (err, post) {
    if (err) { return next(err); }
    res.json(serie);
  });
});

router.param('serie', function (req, res, next, id) {
  let query = Serie.findById(id);
  query.exec(function (err, serie) {
    if (err) { return next(err); }
    if (!serie) { return next(new Error('not found ' + id)); }
    req.serie = serie;
    return next();
  });
});

router.get('/API/series/:serie', function (req, res) {
  req.serie.populate('matches', function(err, rec) {
    if (err) return next(err);
    res.json(rec);
  });
});

router.post('/API/series/:serie/matches', function (req, res) {
  let match = new Match(req.body);
      match.save(function(err, match) {
        if (err) return next(err);
        req.serie.matches.push(match);
        req.serie.save(function(err, rec) {
          if (err) return next(err);
          res.json(match);
        })
      });
});

//blog
router.get('/API/blog/', auth ,function (req, res, next) {
  let query = Blog.find().populate('posts');
  query.exec(function(err, blogs) {
    if (err) return next(err);
    res.json(blogs);
  })
});

router.param('blog', function(req, res, next, id) {
  let query = Blog.findById(id);
  query.exec(function (err, blog){
    if (err) { return next(err); }
    if (!blog) { return next(new Error('not found ' + id)); }
    req.blog = blog;
    return next();
  });
});  

router.get('/API/blog/:blog', auth ,function (req, res, next) {
    req.blog.populate('posts', function(err, rec) {
    if (err) return next(err);
    res.json(rec);
  });
});

router.post('/API/blog/:blog/posts', auth ,function(req, res, next) {
  let post = new Blog(req.body);

  post.save(function(err, post) {
    if (err) return next(err);

    req.blog.posts.push(post);
    req.blog.save(function(err, rec) {
      if (err) return next(err);
      res.json(post);
    })
  });
});


//blog
module.exports = router;
