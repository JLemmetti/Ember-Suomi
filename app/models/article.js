import DS from 'ember-data';
// import {Model} from 'ember-pouch';

export default DS.Model.extend({
	rev: DS.attr('string'),

	title: DS.attr('string'),
	body: DS.attr('string'),
	author: DS.attr('string'),
	published: DS.attr('string')
});
