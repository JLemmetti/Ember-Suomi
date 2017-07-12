import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['a'],

	actions: {
		selectAuthor (author) {
			this.set('model.article.author', author);
		},
		deleteArticle (article) {
			article.deleteRecord();
			article.save();
			this.transitionToRoute('index');
		}
	}
});
