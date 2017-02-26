import Ember from 'ember';

export default Ember.Route.extend({
	titleToken: 'Kirjoittajat',
	model () {
		return this.store.findAll('author');
	},
	afterModel () {
		this.get('meta').update({
			description: 'Juttuja Emberistä ja web-kehityksestä',
			'og:site_name': 'Ember Suomi',
			'og:image': '/images/es.png',
		});
	},
	actions: {
		deleteAuthor (author) {
			author.deleteRecord();
			author.save();
		}
	}
});
