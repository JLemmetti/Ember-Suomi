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
      'script-src': "'self' 'unsafe-eval' apis.google.com www.google-analytics.com",
      'font-src': `'self'`,
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com www.google-analytics.com",
      'img-src': `'self' www.gravatar.com`,
      'style-src': `'self'`,
      'media-src': `'self'`
    },
    torii: {
      sessionServiceName: 'session'
    },
    moment: {
      allowEmpty: true,
      outputFormat: 'L',
      // Remember when updating this you need to restart the dev server
      includeLocales: ['fi']
    },
    metricsAdapters: [
    {
      name: 'GoogleAnalytics',
      environments: ['production'],
      config: {
        id: 'UA-92832568-1'
      }
    }
    ]
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.firebase = {
      apiKey: "AIzaSyA8c9YnuZKMXyrp2Vwdhb5rRrepj7EOWJE",
      authDomain: "ember-suomi-dev.firebaseapp.com",
      databaseURL: "https://ember-suomi-dev.firebaseio.com",
      storageBucket: "ember-suomi-dev.appspot.com",
      messagingSenderId: "995971842197"
    };
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
    ENV.firebase = {
      apiKey: "AIzaSyCfKQDpWd7kHO6vLO4EIOM8a77xL2iCNUw",
      authDomain: "ember-suomi.firebaseapp.com",
      databaseURL: "https://ember-suomi.firebaseio.com",
      storageBucket: "ember-suomi.appspot.com",
      messagingSenderId: "52897581128"
    };
  }

  return ENV;
};
