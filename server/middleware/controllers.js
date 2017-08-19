var prettyjson = require('prettyjson');

var location = require('./../../lib/geocode.js');

var currLocation = 'bits pilani, hyderabad';

module.exports.renderHome = function(req, res){
  res.render('home');
};

module.exports.setDefaultLocation = function(req, res, next){
  location(currLocation, function(result){
    if(result.error) return res.locals = result;
    res.locals = result;
    next();
  });
}

module.exports.renderMaps = function(req, res){
  res.render('maps');
}

module.exports.setNewLocation = function(req, res, next){
  currLocation = req.body.address;
  location(currLocation, function(result){
    if(result.error) return res.locals = result;
    res.locals = result;
    next();
  });
}
