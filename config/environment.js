/* jshint node: true */
/* eslint indent: [2, 2] */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-suomi',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      remoteDB: 'ember_suomi_test',
      localDB: 'local_pouch_test'
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self'",
      'connect-src': "'self' http://localhost:5984 blob:",
      'img-src': "'self' www.gravatar.com",
      'style-src': "'self'",
      'media-src': "'self'"
    },
    moment: {
      allowEmpty: true,
      outputFormat: 'L',
      // Remember when updating this you need to restart the dev server
      includeLocales: ['fi']
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
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.remoteDB = 'ember_suomi';
    ENV.APP.localDB = 'local_pouch';
  }

  return ENV;
};
