import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['a'],

	actions: {
		deleteArticle (article) {
			article.deleteRecord();
			article.save();
			this.transitionToRoute('index');
		}
	}
});
