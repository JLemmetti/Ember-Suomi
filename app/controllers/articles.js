import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		deleteArticle (article) {
			article.deleteRecord();
			article.save();
		}
	}
});
