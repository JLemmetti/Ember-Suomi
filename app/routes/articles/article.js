import Ember from 'ember';

export default Ember.Route.extend({
	model (params) {
		return Ember.RSVP.hash({
			article: this.store.findRecord('article', params.id),
			authors: this.store.findAll('author')
		});
	},
	renderTemplate () {
		this._super(...arguments);
		this.render('articles/article', {
			into: 'application'
		});
	}
});
