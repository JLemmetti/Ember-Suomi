import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		selectAuthor (author) {
			this.set('model.article.author', author);
		}
	}
});
