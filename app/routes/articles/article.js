import Ember from 'ember';

export default Ember.Route.extend({
	titleToken (model) {
		return model.article.get('title');
	},
	model (params) {
		return Ember.RSVP.hash({
			article: this.store.findRecord('article', params.id),
			authors: this.store.findAll('author')
		});
	},
	afterModel (model) {

		let meta = {
			description: model.article.get('lead'),
			'og:description': model.article.get('lead'),
			'og:title': model.article.get('title')
		};

		if (model.article.get('updated')) {
			meta['og:article:published_time'] = model.article.get('published').toISOString();
		}

		if (model.article.get('updated')) {
			meta['og:article:modified_time'] = model.article.get('updated').toISOString();
		}

		this.get('meta').update(meta);
	},
	renderTemplate () {
		this._super(...arguments);
		this.render('articles/article', {
			into: 'application'
		});
	}
});
