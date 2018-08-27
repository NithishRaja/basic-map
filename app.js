/*
 * Primary file for app
 *
 */

// Dependencies
const app = require('./server');
const credentials = require("./credentials");

// Set app to listen to specified port
app.listen(credentials.port, function(){
  console.log('server is listening at port %d in %s environment, press CTRL+C to exit', credentials.port, credentials.envName);
});
