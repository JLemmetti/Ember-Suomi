import Ember from 'ember';

export default Ember.Controller.extend({
	sortParams: ['name:asc'],
	sorted: Ember.computed.sort('model', 'sortParams')
});
