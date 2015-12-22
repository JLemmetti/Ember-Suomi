import DS from 'ember-data';

export default DS.Model.extend({
	// articles: hasMany('article'),

	name: DS.attr('string'),
	twitter: DS.attr('string'),
	email: DS.attr('string'),
	github: DS.attr('string'),
	bio: DS.attr('string'),
	rev: DS.attr('string')
});
