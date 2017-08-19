var middleware = require('./../middleware/controllers.js');

module.exports = function(app){

  app.route('/')
      .get(middleware.renderHome);

  app.route('/maps')
      .get(middleware.setDefaultLocation, middleware.renderMaps)
      .post(middleware.setNewLocation, middleware.renderMaps);

}
