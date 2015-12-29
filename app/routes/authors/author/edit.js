import Ember from 'ember';

export default Ember.Route.extend({
	renderTemplate () {
		this._super(...arguments);
		this.render('authors/new', {
			// into: 'application'
		});
	},
	actions: {
		saveAuthor (author) {
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
