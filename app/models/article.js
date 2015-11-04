import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string', {defaultValue: 'seppo'}),
	body: DS.attr('string'),
	// author: DS.attr('string'),
	// published: DS.attr('string')
});
