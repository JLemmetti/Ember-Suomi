import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	lead: DS.attr('string'),
	body: DS.attr('string'),
	author: DS.attr('string', {defaultValue: 'Jurkka Lemmetti'}),
	published: DS.attr('date'),
	updated: DS.attr('date'),
	rev: DS.attr('string')
});
