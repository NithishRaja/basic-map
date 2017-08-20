var supertest = require('supertest');

var server = require('./../server.js');

describe('requests to root path', function(){

  it('returns 200 status code', function(done){
    supertest(server)
      .get('/')
      .expect(200, done);
  });

  it('returns content type html', function(done){
    supertest(server)
      .get('/')
      .expect('Content-Type', /text\/html/, done);
  });

  it('returns markup for home page', function(done){
    supertest(server)
      .get('/')
      .expect(/welcome/i, done);
  });

});

describe('requests to maps path', function(){

  it('returns 200 status code', function(done){
    supertest(server)
      .get('/maps')
      .expect(200, done);
  });

  it('returns content type html', function(done){
    supertest(server)
      .get('/maps')
      .expect('Content-Type', /text\/html/, done);
  });

  it('returns markup for maps page', function(done){
    supertest(server)
      .get('/maps')
      .expect(/map/i, done);
  });

  it('renders default location as bits hyderabad', function(done){
    supertest(server)
      .get('/maps')
      .expect(/Bits Pilani/i, done);
  });

  it('renders location according to input address', function(done){
    supertest(server)
      .post('/maps')
      .send({'address': 'jainagar, arumbakkam'})
      .expect(/jai nagar/i, done);
  });

});
