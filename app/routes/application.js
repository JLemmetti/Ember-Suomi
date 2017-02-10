import Ember from 'ember';

export default Ember.Route.extend({
	title (tokens) {
		let header = tokens.reverse();
		header.push('Ember Suomi');
		return header.join(' - ');
	},
	beforeModel: function() {
		return this.get('session').fetch().catch(function() {});
	},

	actions: {
		signIn: function (provider) {
			this.get('session').open('firebase', {provider}).then(function (data) {
			console.log(data.currentUser);
		});
		},
			signOut: function () {
			this.get('session').close();
		}
	}
});
