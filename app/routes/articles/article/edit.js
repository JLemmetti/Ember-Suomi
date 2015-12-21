import Ember from 'ember';

export default Ember.Route.extend({
	renderTemplate () {
		this._super(...arguments);
		this.render('articles/new', {
			into: 'application'
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
