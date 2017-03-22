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
	createSlug (title) {
		return title.toString().toLowerCase().trim()
			.replace(/\s+/g, '-') // Replace spaces with -
			.replace(/\-\-+/g, '-') // Replace multiple - with single -
			.replace(/ä/g, 'a')
			.replace(/ö/g, 'o')
			.replace(/&/g, 'ja') // Replace '&' with 'ja'
			.replace(/[\s\W-]+/g, '-'); // Replace all non-word chars with -
	},

	actions: {
		saveArticle (article) {

			article.set('author', article.get('author'));

			// Set the artile to publication date only if it's also set to be released
			if (article.get('released')) {
				article.set('published', new Date());
			}

			article.set('slug', this.createSlug(article.get('title')));

			article.save().then(article => this.transitionTo('articles.article', article.id));
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
