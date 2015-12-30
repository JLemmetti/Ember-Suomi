import Ember from 'ember';

export default Ember.Route.extend({
	titleToken: 'Uusi kirjoittaja',
	model () {
		return this.store.createRecord('author');
	},
	actions: {
		saveAuthor (author) {
			author.save()
			.then(this.transitionTo('authors'));
		},
		willTransition () {
			// Rollback model attributes when transitioning away from this route.
			// This will not prevet saving new authors
			this.get('currentModel').rollbackAttributes();
		}
	}
});
