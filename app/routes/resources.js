import Ember from 'ember';

export default Ember.Route.extend({
	titleToken: 'Resurssit',
	afterModel () {
		this.get('meta').update({
			description: 'Juttuja Emberistä ja web-kehityksestä',
			'og:site_name': 'Ember Suomi',
			'og:image': '/images/es.png',
		});
	}
});
