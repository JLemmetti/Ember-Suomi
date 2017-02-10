/* jshint node: true */
/* eslint indent: [2, 2] */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-suomi',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    APP: {
    },
    contentSecurityPolicy: {
      'default-src': `'none'`,
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'font-src': `'self'`,
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com",
      'img-src': `'self' www.gravatar.com`,
      'style-src': `'self'`,
      'media-src': `'self'`
    },
    torii: {
      sessionServiceName: 'session'
    },
    firebase: {
      apiKey: "AIzaSyA8c9YnuZKMXyrp2Vwdhb5rRrepj7EOWJE",
      authDomain: "ember-suomi-dev.firebaseapp.com",
      databaseURL: "https://ember-suomi-dev.firebaseio.com",
      storageBucket: "ember-suomi-dev.appspot.com",
      messagingSenderId: "995971842197"
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
