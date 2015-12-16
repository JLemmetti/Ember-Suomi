import Ember from 'ember';

export default Ember.Controller.extend({
	sortParams: ['published:desc'],
	sorted: Ember.computed.sort('model', 'sortParams'),

	actions: {
		deleteArticle (article) {
			article.deleteRecord();
			article.save();
		}
	}
});
