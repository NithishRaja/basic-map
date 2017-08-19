var app = require('./server/server.js');

app.listen(app.get('port'), function(){
  console.log('server is listening at port %d, press CTRL+C to close server', app.get('port'));
