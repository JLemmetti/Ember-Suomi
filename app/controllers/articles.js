import Ember from 'ember';

const {
	computed
}  = Ember;

export default Ember.Controller.extend({
	sortParams: ['published:desc'],
	sortedArticles: Ember.computed.sort('articles', 'sortParams'),

	// Only show released articles to visitors that have not authenticated
	articles: computed('model', 'session.isAuthenticated', {
		get () {
			if (this.get('session.isAuthenticated')) {
				return this.get('model');
			} else {
				return this.get('model').filter(article => article.get('released'));
			}
		}
	})
});
