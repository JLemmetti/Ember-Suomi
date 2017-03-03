import Ember from 'ember';

export default Ember.Route.extend({
	titleToken: 'Kirjoittajat',
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
