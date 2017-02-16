import Ember from 'ember';

export default Ember.Route.extend({
	titleToken: 'Omat tietosi',

	model () {

		return this.store.query('author', {orderBy: 'firebaseUID', equalTo: this.get('session.uid')})
			.then(users => {

				let user = users.get('firstObject');

				if (user) {
					return user;
				}
				else {
					// Create a new author if this is the first time this user is editing
					// their details
					return this.store.createRecord('author', {
						firebaseUID: this.get('session.uid'),
						email: this.get('session.email')
					});
				}
			});
	}
});
