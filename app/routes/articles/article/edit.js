import Ember from 'ember';

export default Ember.Route.extend({
	model (params) {
		return this.store.findRecord('article', params.id);
	},
	renderTemplate () {
		this._super(...arguments);
		this.render('articles/new', {
			into: 'articles'
		});
	},
	actions: {
		saveArticle (article) {
			article.save()
			.then(this.transitionTo('articles.article'));
		}
	}
});
