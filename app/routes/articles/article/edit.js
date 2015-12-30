import Ember from 'ember';

export default Ember.Route.extend({
	titleToken: 'Muokkaa artikkelia',
	renderTemplate () {
		this._super(...arguments);
		this.render('articles/new', {
			into: 'application',
			controller: this.controllerFor('articles.article')
		});
	},
	actions: {
		saveArticle (article) {
			article.set('updated', new Date());
			article.save()
			.then(this.transitionTo('articles.article'));
		}
	}
});
