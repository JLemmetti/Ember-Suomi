import DS from 'ember-data';

export default DS.Model.extend({
	author: DS.belongsTo('author'),

	title: DS.attr('string'),
	lead: DS.attr('string'),
	body: DS.attr('string'),
	published: DS.attr('date', {defaultValue: new Date()}),
	updated: DS.attr('date'),
	released: DS.attr('boolean', {defaultValue: false}),
	rev: DS.attr('string')
});
