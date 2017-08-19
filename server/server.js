//including vendor modules
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var path = require('path');
var bodyparser = require('body-parser');

//including local modules

var routes = require('./routes/routes.js');

var app = express();

//setting port value
app.set('port', process.env.PORT || 3000);

//confguring view engine
app.set('views', path.join(__dirname, './../views'));
app.set('view engine', 'ejs');
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);
app.use(expressLayouts);

//mounting body-parser middleware
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

//setting up routes
routes(app);

if(require.main === module){
  //server listening to port
  app.listen(app.get('port'), function(){
    console.log('server is listening at port %d, press CTRL+C to close server', app.get('port'));
  });
}else{
  //exporting server
  module.exports = app;
}
