var app = require('./server/server.js');

//TODO write tests for the routes

//TODO provide proper documentation

app.listen(app.get('port'), function(){
  console.log('server is listening at port %d, press CTRL+C to close server', app.get('port'));
