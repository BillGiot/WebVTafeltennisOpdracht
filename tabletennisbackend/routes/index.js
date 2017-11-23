var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let NewsItem = mongoose.model('NewsItem');
let club = mongoose.model('Club');
let team = mongoose.model('Team');
let player = mongoose.model('Player');
let match = mongoose.model('Match');

//news
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

//Club
router.get('/API/series/clubs', function(req,res,next){
  club.find(function(err, club){
    if (err) { return next(err); }
    res.json(club);
  });
});

router.post('/API/series/clubs', function(req, res, next){
  let club = new Club(req.body);
  club.save(function(err, rec){
    if(err){return next(err);}
    res.json(rec);
    });
  });

  router.param('club', function(req, res, next, id) {
    let query = club.findById(id);
    query.exec(function (err, club){
      if (err) { return next(err); }
      if (!club) { return next(new Error('not found ' + id)); }
      req.club = club;
      return next();
    });
  }); 
  
  router.get('/API/series/:club', function(req, res) {
    res.json(req.club);
  });

//Team
router.get('/API/series/:club/teams', function(req,res,next){
  team.find(function(err, team){
    if (err) { return next(err); }
    res.json(team);
  });
});

router.post('/API/series/:club/teams', function(req, res, next){
  let team = new Team(req.body);
  club.save(function(err, rec){
    if(err){return next(err);}
    res.json(rec);
    });
  });

  router.param('team', function(req, res, next, id) {
    let query = team.findById(id);
    query.exec(function (err, team){
      if (err) { return next(err); }
      if (!team) { return next(new Error('not found ' + id)); }
      req.team = team;
      return next();
    });
  }); 
  
  router.get('/API/series/:club/:team', function(req, res) {
    res.json(req.team);
  });

//Player
router.get('/API/series/:club/players', function(req,res,next){
  player.find(function(err, player){
    if (err) { return next(err); }
    res.json(player);
  });
});

router.post('/API/series/:club/players', function(req, res, next){
  let player = new Player(req.body);
  player.save(function(err, rec){
    if(err){return next(err);}
    res.json(rec);
    });
  });

  router.param('player', function(req, res, next, id) {
    let query = player.findById(id);
    query.exec(function (err, player){
      if (err) { return next(err); }
      if (!player) { return next(new Error('not found ' + id)); }
      req.player = team;
      return next();
    });
  }); 
  
  router.get('/API/series/:club/:player', function(req, res) {
    res.json(req.player);
  });

//Match
router.get('/API/series/matches/', function(req,res,next){
  match.find(function(err, match){
    if (err) { return next(err); }
    res.json(match);
  });
});

router.post('/API/series/matches/', function(req, res, next){
  let match = new Match(req.body);
  match.save(function(err, rec){
    if(err){return next(err);}
    res.json(rec);
    });
  });

  router.param('match', function(req, res, next, id) {
    let query = match.findById(id);
    query.exec(function (err, match){
      if (err) { return next(err); }
      if (!match) { return next(new Error('not found ' + id)); }
      req.match = match;
      return next();
    });
  }); 
  
  router.get('/API/series/matches/:match', function(req, res) {
    res.json(req.match);
  });

  //-----
router.get('/API/recipe/:recipe', function(req, res) {
  req.recipe.populate('ingredients', function(err, rec) {
    if (err) return next(err);
    res.json(rec);
  });
});

router.delete('/API/recipe/:recipe', function(req, res, next) {
  Ingredient.remove({ _id: {$in: req.recipe.ingredients }}, function (err) {
    if (err) return next(err);
    req.recipe.remove(function(err) {
      if (err) { return next(err); }   
      res.json(req.recipe);
     });
  })
})

router.post('/API/recipe/:recipe/ingredients', function(req, res, next) {
  let ing = new Ingredient(req.body);

  ing.save(function(err, ingredient) {
    if (err) return next(err);

    req.recipe.ingredients.push(ingredient);
    req.recipe.save(function(err, rec) {
      if (err) return next(err);
      res.json(ingredient);
    })
  });
});


module.exports = router;
