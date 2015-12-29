import Ember from 'ember';

export default Ember.Route.extend({
	model () {
		return this.store.findAll('author');
	},
	actions: {
		deleteAuthor (author) {
			author.deleteRecord();
			author.save();
		}
	}
});
