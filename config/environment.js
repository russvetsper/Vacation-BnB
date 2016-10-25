/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'vacation-bnb',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
        }
      },

      firebase: {


          apiKey: "AIzaSyDNGN11n1JDS0ctUsxMhtvzvfQlS-IUn6I",
          authDomain: "vacation-bnb.firebaseapp.com",
          databaseURL: "https://vacation-bnb.firebaseio.com",
          storageBucket: "vacation-bnb.appspot.com",
          messagingSenderId: "338752701164"

    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
