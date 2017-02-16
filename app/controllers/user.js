import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		saveAuthor (author) {
			author.save()
			.then(this.transitionToRoute('application'));
		},
		resetPassword () {
			alert('resetPassword');
		}
	}
});
