import Ember from 'ember';

export default Ember.Route.extend({
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
		willTransition () {
			// Rollback model attributes when transitioning away from this route.
			// This will not prevet saving new authors
			this.get('currentModel').rollbackAttributes();
		}
	}
});
