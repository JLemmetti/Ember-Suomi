import Ember from 'ember';

const {
	Route,
	$
}  = Ember;

export default Route.extend({
	title (tokens) {
		let header = tokens.reverse();
		header.push('Ember Suomi');
		return header.join(' - ');
	},
	beforeModel () {
		return this.get('session').fetch().catch(function() {});
	},
	model () {
		// Check if there's a valid session open and if so, fetch the user data
		if (this.get('session.uid')) {
			return this.store.query('author', {orderBy: 'firebaseUID', equalTo: this.get('session.uid')})
			.then(users => users.get('firstObject'));
		}
	},
	afterModel () {
		$('.page-placeholder').hide();
	}
});
