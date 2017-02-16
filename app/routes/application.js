import Ember from 'ember';

export default Ember.Route.extend({
	title (tokens) {
		let header = tokens.reverse();
		header.push('Ember Suomi');
		return header.join(' - ');
	},
	beforeModel () {
		return this.get('session').fetch().catch(function() {});
	}
});
