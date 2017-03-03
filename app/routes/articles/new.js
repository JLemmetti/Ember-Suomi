import Ember from 'ember';
import KeyboardShortcuts from 'ember-keyboard-shortcuts/mixins/route';

export default Ember.Route.extend(KeyboardShortcuts, {
	titleToken: 'Uusi artikkeli',
	model () {
		return Ember.RSVP.hash({
			article: this.store.createRecord('article'),
			authors: this.store.findAll('author')
		});
	},
	afterModel (model) {
		// Preselect logged in user as author for the new article
		model.article.set('author', this.modelFor('application'));
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
	createSlug (title) {
		return title.toString().toLowerCase().trim()
			.replace(/\s+/g, '-') // Replace spaces with -
			.replace(/\-\-+/g, '-') // Replace multiple - with single -
			.replace(/ä/g, 'a')
			.replace(/ö/g, 'o')
			.replace(/&/g, 'ja') // Replace '&'' with 'ja'
			.replace(/[\s\W-]+/g, '-'); // Replace all non-word chars with -
	},

	actions: {
		saveArticle (article) {

			let author = article.get('author');

			article.set('author', author);

			article.set('slug', this.createSlug(article.get('title')));

			article.save()
				.then(article => this.transitionTo('articles.article', article.id));
		},
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
