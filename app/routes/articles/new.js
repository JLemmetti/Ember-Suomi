import Ember from 'ember';

export default Ember.Route.extend({
	model () {
		return this.store.createRecord('article');
	},
	actions: {
		saveArticle (article) {
			article.save()
			.then(article => this.transitionTo('articles.article', article.id));
		},
		willTransition () {
			// Rollback model attributes when transitioning away from this route.
			// This will not prevet saving new articles
			this.get('currentModel').rollbackAttributes();
		}
	}
});
