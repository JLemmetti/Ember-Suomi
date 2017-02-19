import Ember from 'ember';

export default Ember.Controller.extend({
	email: null,
	password: null,

	actions: {
		signIn: function (provider) {

			let email = this.get('email'),
				password = this.get('password');

			this.get('session').open('firebase', {provider, email, password}).then(function (data) {

			});
		},
		signOut: function () {
			this.get('session').close();
		}
	}
});
