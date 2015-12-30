import Ember from 'ember';

export default Ember.Route.extend({
	titleToken: 'Uusi artikkeli',
	model () {
		return Ember.RSVP.hash({
			article: this.store.createRecord('article'),
			authors: this.store.findAll('author')
		});
	},
	renderTemplate () {
		this._super(...arguments);
		this.render('articles/new', {
			into: 'application'
		});
	},
	actions: {
		saveArticle (article) {
			let author = article.get('author');
			article.set('author', author);
			article.save()
			.then(article => this.transitionTo('articles.article', article.id));
		}
	}
});
