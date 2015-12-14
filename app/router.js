import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    this.route('articles', function () {
      this.route('article', {path: ':article_id'});
      this.route('new');
    });
    this.route('about');
    this.route('snippets');

});

export default Router;
