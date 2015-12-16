import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    this.route('articles', function () {
      this.route('article', {path: ':id'}, function () {
        this.route('edit');
      });
      this.route('new');
    });
    this.route('about');
    this.route('snippets');

});

export default Router;
