import Ember from 'ember';

export default Ember.Route.extend({
	titleToken: 'Uusi artikkeli',
	model () {
		return Ember.RSVP.hash({
			article: this.store.createRecord('article'),
			authors: this.store.findAll('author')
		});
	},
	afterModel (model) {
		// Preselect logged in user as author for the new article
		model.article.set('author', this.controllerFor('application').get('model'));
	},
	renderTemplate () {
		this._super(...arguments);
		this.render('articles/new', {
			into: 'application'
		});
	},
	deactivate () {
		// Delete the new article if the author browses away from the page before
		// saving it
		let article = this.controllerFor('articles.new').get('model.article');

		if (article.get('isNew')) {
			article.deleteRecord();
		}
	},

	actions: {

		quickSave () {
			this.send('saveArticle', this.controllerFor('articles.new').get('model.article'));
		}
	},
	keyboardShortcuts: {
		'mod+s': {
			action: 'quickSave'
		}
	}
});
