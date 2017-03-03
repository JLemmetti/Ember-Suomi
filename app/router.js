/* eslint indent: [2, 2] */

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  metrics: Ember.inject.service(),

  didTransition () {
    this._super(...arguments);
    this._trackPage();
  },

  _trackPage() {
    Ember.run.scheduleOnce('afterRender', this, () => {
      const page = this.get('url');
      const title = this.getWithDefault('currentRouteName', 'unknown');

      Ember.get(this, 'metrics').trackPage({page, title});
    });
  }
});

Router.map(function () {
  this.route('articles', function () {
    this.route('new');
    this.route('article', {path: ':id'}, function () {
      this.route('edit');
    });
  });

  this.route('authors', function () {
    this.route('author', {path: ':id'}, function () {});
  });


  this.route('about');
  this.route('user');
  this.route('page-not-found', {path: '/*wildcard'});
  this.route('resources');
});

export default Router;
