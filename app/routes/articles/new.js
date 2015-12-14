import Ember from 'ember';

export default Ember.Route.extend({
	model () {
		return this.store.createRecord('article');
	},
	actions: {
		createArticle (article) {
			article.save()
			.then(this.transitionTo('articles'));
		}
	}
});
