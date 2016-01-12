import Ember from 'ember';
import KeyboardShortcuts from 'ember-keyboard-shortcuts/mixins/route';

export default Ember.Route.extend(KeyboardShortcuts, {
	titleToken: 'Uusi kirjoittaja',
	model () {
		return this.store.createRecord('author');
	},
	actions: {
		saveAuthor (author) {
			author.save()
			.then(this.transitionTo('authors'));
		},
		quickSave () {
			this.send('saveAuthor', this.controllerFor('authors.new').get('model'));
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
