import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	lead: DS.attr('string'),
	body: DS.attr('string'),
	author: DS.attr('string'),
	published: DS.attr('date'),
	updated: DS.attr('date')
});
