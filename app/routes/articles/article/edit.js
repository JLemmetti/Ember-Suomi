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
	deactivate () {
		// Reset the article controller
		let article = this.controllerFor('articles.article');

		article.set('isDeletingArticle', false);
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

			// Set the artile to publication date only if it's set to be released
			// and it's not released yet
			if (article.get('released') && !article.get('published')) {
				article.set('published', new Date());
			}

			// If the article has been released and it has a publication date,
			// update the `updated` value with current time
			if (article.get('released') && article.get('published')) {
				article.set('updated', new Date());
			}

			article.set('slug', this.createSlug(article.get('title')));

			article.save().then(this.transitionTo('articles.article'));
		},
		quickSave () {
			this.send('saveArticle', this.controllerFor('articles.article').get('model.article'));
		}
	},
	keyboardShortcuts: {
		'mod+s': {
			action: 'quickSave'
		}
	}
});
