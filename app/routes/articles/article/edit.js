import Ember from 'ember';
import KeyboardShortcuts from 'ember-keyboard-shortcuts/mixins/route';

export default Ember.Route.extend(KeyboardShortcuts, {
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
	actions: {
		saveArticle (article) {
			article.set('updated', new Date());
			article.save()
			.then(this.transitionTo('articles.article'));
		},
		quickSave () {
			this.send('saveArticle', this.controllerFor('articles.article').get('model.article'));
		},
	},
	keyboardShortcuts: {
		'mod+s': {
			action: 'quickSave'
		}
	}
});
