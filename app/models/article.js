import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	lead: DS.attr('string'),
	body: DS.attr('string'),
	author: DS.attr('string', {defaultValue: 'Jurkka Lemmetti'}),
	published: DS.attr('date', {defaultValue: new Date()}),
	updated: DS.attr('date'),
	released: DS.attr('boolean', {defaultValue: false}),
	rev: DS.attr('string')
});
