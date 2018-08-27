
// Container for environments
const environment = {};

// Development environment parameters
environment.development = {
  'port' : 80,
  'envName': "development",
  'google': {
    'googlemaps': {
      'apikey': "AIzaSyCJkSm8qeTg2sBpXjIRAPQE0GMBFEK-C6I"
    }
  }
};

// Production environment parameters
environment.production = {
  'port': 443,
  'envName': "production",
  'google': {
    'googlemaps': {
      'apikey': "AIzaSyCJkSm8qeTg2sBpXjIRAPQE0GMBFEK-C6I"
    }
  }
};

// Getting requested environment
const requestedEnvironment = typeof(process.env.NODE_ENV)=="string"?process.env.NODE_ENV:"";

// Setting selected environment
const selectedEnvironment = typeof(environment[requestedEnvironment])=="object"?environment[requestedEnvironment]:environment.development;

module.exports = selectedEnvironment;
