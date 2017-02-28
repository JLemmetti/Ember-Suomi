import DS from 'ember-data';

export default DS.Model.extend({
	articles: DS.hasMany({inverse: null}),

	firebaseUID: DS.attr('string'),
	name: DS.attr('string'),
	twitter: DS.attr('string'),
	email: DS.attr('string'),
	github: DS.attr('string'),
	linkedin: DS.attr('string'),
	bio: DS.attr('string')
});
