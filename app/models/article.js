import DS from 'ember-data';

export default DS.Model.extend({
	author: DS.belongsTo(),

	title: DS.attr('string'),
	lead: DS.attr('string'),
	body: DS.attr('string'),
	published: DS.attr('date', {defaultValue: function () {
			return new Date();
		}
	}),
	updated: DS.attr('date'),
	released: DS.attr('boolean', {defaultValue: false})
});
