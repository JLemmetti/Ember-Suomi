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
	actions: {
		saveArticle (article) {
			article.set('updated', new Date());
			article.save()
			.then(this.transitionTo('articles.article'));
		},
		quickSave () {
			this.send('saveArticle', this.controllerFor('articles.article').get('model.article'));
		},
		deleteArticle (article) {
			article.deleteRecord();
			article.save();
			this.transitionTo('articles');
		}
	},
	keyboardShortcuts: {
		'mod+s': {
			action: 'quickSave'
		}
	}
});
