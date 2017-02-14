import Ember from 'ember';

export default Ember.Route.extend({
	titleToken: 'Artikkelit',
	model () {
		return this.store.findAll('article');
	}
});
