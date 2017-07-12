import Ember from 'ember';

export default Ember.Controller.extend({
	email: null,
	password: null,
	loginFormVisible: false,

	actions: {
		signIn: function (provider) {

			let email = this.get('email'),
				password = this.get('password');

			// Sign in the user, fetch the user data and set the user as the model for application route
			this.get('session').open('firebase', {provider, email, password}).then(() => {
				this.store.query('author', {orderBy: 'firebaseUID', equalTo: this.get('session.uid')})
				.then(users => this.set('model', users.get('firstObject')));
			});

			this.set('showRightSlideMenu', false);
		},
		signOut: function () {
			this.get('session').close();
			this.set('showRightSlideMenu', false);
		},
		toggleAdminPanel () {
			this.toggleProperty('showRightSlideMenu');
		}
	}
});
