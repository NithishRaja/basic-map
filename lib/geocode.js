var http = require('http');

module.exports = function(query, callBack){

  var options = {
    hostname: 'maps.googleapis.com',
    path: '/maps/api/geocode/json?address='+encodeURIComponent(query)+'&sensor=false'
  };

  http.request(options, function(res){
    var data = '';

    res.on('data', function(chunk){
      data+=chunk;
    });

    res.on('end', function(){
      data = JSON.parse(data);
      if(data.results.length){
        callBack({error: null, data: data});
      }else{
        callBack({error: 'no data returned', data: null});
      }
    });
  }).end();

}
