import Ember from 'ember';

export default Ember.Controller.extend({
	email: null,
	password: null,
	loginFormVisible: false,

	actions: {
		signIn: function (provider) {

			let email = this.get('email'),
				password = this.get('password');

			this.get('session').open('firebase', {provider, email, password}).then(function () {

			});
		},
		signOut: function () {
			this.get('session').close();
		},
		toggleLoginForm () {
			this.set('loginFormVisible', !this.get('loginFormVisible'));
		}
	}
});
