import Ember from 'ember';

export default Ember.Controller.extend({
	authors: Ember.computed({
		get () {
			return this.store.findAll('author');
		}
	}),
	actions: {
		selectAuthor (author) {
			this.set('model.author', author);
		}
	}
});
