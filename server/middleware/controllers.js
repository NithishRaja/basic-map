var prettyjson = require('prettyjson');

var location = require('./../../lib/geocode.js');
var key = require('./../../credentials.js').google.googlemaps.apikey;

var currLocation = 'bits pilani, hyderabad';

//function to render the home page
module.exports.renderHome = function(req, res){
  res.render('home');
};

//function to set default values to res.locals
module.exports.setDefaultLocation = function(req, res, next){
  location(currLocation, function(result){
    if(result.error) return res.locals = result;
    res.locals = result;
    res.locals.key = key;
    next();
  });
}

//function to render the /maps route
module.exports.renderMaps = function(req, res){
  res.render('maps');
}

//function to set res.locals to user inputted address
module.exports.setNewLocation = function(req, res, next){
  currLocation = req.body.address;
  location(currLocation, function(result){
    if(result.error) return res.locals = result;
    res.locals = result;
    res.locals.key = key;
    next();
  });
}
