import Ember from 'ember';

export default Ember.Route.extend({
	model () {
		return this.store.findAll('article');
	},
	actions: {
		deleteArticle (article) {
			article.deleteRecord();
			article.save();
		}
	}
});
