import Ember from 'ember';

export default Ember.Route.extend({
	renderTemplate () {
		this._super(...arguments);
		this.render('articles/article', {
			into: 'application'
		});
	},
	model (params) {
		return this.store.findRecord('article', params.id);
	}
});
