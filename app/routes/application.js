import Ember from 'ember';

export default Ember.Route.extend({
	title (tokens) {
		let header = tokens.reverse();
		header.push('Ember Suomi');
		return header.join(' - ');
	},
	beforeModel () {
		return this.get('session').fetch().catch(function() {});
	},
	model () {
		return this.store.query('author', {orderBy: 'firebaseUID', equalTo: this.get('session.uid')})
			.then(users => {
				return users.get('firstObject');
			});
	}
});
