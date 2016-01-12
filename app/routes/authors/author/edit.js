import Ember from 'ember';
import KeyboardShortcuts from 'ember-keyboard-shortcuts/mixins/route';

export default Ember.Route.extend(KeyboardShortcuts, {
	titleToken (model) {
		return 'Muokkaa tietoja: ' + model.get('name');
	},
	renderTemplate () {
		this._super(...arguments);
		this.render('authors/new', {
			into: 'application',
			controller: this.controllerFor('authors.author')
		});
	},
	actions: {
		saveAuthor (author) {
			author.save()
			.then(this.transitionTo('authors'));
		},
		quickSave () {
			this.send('saveAuthor', this.controllerFor('authors.author').get('model'));
		},
		willTransition () {
			// Rollback model attributes when transitioning away from this route.
			// This will not prevet saving new authors
			this.get('currentModel').rollbackAttributes();
		}
	},
	keyboardShortcuts: {
		'mod+s': {
			action: 'quickSave'
		}
	}
});
