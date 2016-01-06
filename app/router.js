/* eslint indent: [2, 2] */

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {

  this.route('articles', function () {
    this.route('new');
    this.route('article', {path: ':id'}, function () {
      this.route('edit');
    });
  });

  this.route('authors', function () {
    this.route('new');
    this.route('author', {path: ':id'}, function () {
      this.route('edit');
    });
  });


  this.route('about');
  this.route('snippets');
  this.route('login');
});

export default Router;
