import Ember from 'ember';

export default Ember.Route.extend({
	model () {
		return this.store.createRecord('author');
	},
	actions: {
		saveAuthor (author) {
			console.log(author.get('name'));
			author.save()
			.then(author => this.transitionTo('authors'));
		},
		willTransition () {
			// Rollback model attributes when transitioning away from this route.
			// This will not prevet saving new authors
			this.get('currentModel').rollbackAttributes();
		}
	}
});
