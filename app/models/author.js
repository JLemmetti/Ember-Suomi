import DS from 'ember-data';

export default DS.Model.extend({
	// Using plural here breaks stuff in weird ways
	article: DS.hasMany(),

	name: DS.attr('string'),
	twitter: DS.attr('string'),
	email: DS.attr('string'),
	github: DS.attr('string'),
	bio: DS.attr('string')
});
